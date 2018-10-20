import redis from "redis";
import { configManagerObj } from './ConfigManager';
import { CONSTANTS } from "./constants";
import { logger } from "./Logger";
let redisClient = null;
let cacheKeyConf = null;

function startRedisCacheManager(cacheKeyConfig) {
    cacheKeyConf = cacheKeyConfig;
    let options = {};
    let redisHost = configManagerObj.redisCacheConfig.connection.host;
    let redisPort = configManagerObj.redisCacheConfig.connection.port;
    let redisAuthPassword = configManagerObj.redisCacheConfig.connection.password;
    let isSSL = configManagerObj.redisCacheConfig.connection.isSSL;
    let retryTime = configManagerObj.redisCacheConfig.connection.retry_time;
    options = {
        host: redisHost,
        port: redisPort,
        auth_pass: redisAuthPassword,
        retry_strategy: function retry(options) {
            console.log('Redis retry_strategy:', options);
            if (options && options.error && options.error.code === 'ECONNREFUSED') {
                console.log('Redis connection refused');
            }
            return retryTime;
        }
    };
    if (isSSL) {
        options.tls = {
            servername: redisHost
        };
    }
    redisClient = redis.createClient(options);
}


const isConAlive = () => redisClient ? true : false;

function canExtendTTL(key) {
    if (cacheKeyConf) {
        let cacheKeys = cacheKeyConf.cacheKey;
        for (let i in cacheKeys) {
            let keyName = cacheKeys[i].name;
            if (key.indexOf(keyName) >= 0) {
                return cacheKeys[i].extendTTL;
            }
        }
    } else {
        return false;
    }
}

function getTTL(key) {
    if (cacheKeyConf) {
        let cacheKeys = cacheKeyConf.cacheKey;
        for (let i in cacheKeys) {
            let keyName = cacheKeys[i].name;
            if (key.indexOf(keyName) >= 0) {
                return cacheKeys[i].ttl;
            }
        }
    } else {
        return CONSTANTS.REDIS_CONFIG.DEFAULT_TTL;
    }
}

function getAllCacheKeyPrefix() {
    if (cacheKeyConf) {
        let cacheKeys = cacheKeyConf.cacheKey;
        let cacheKeyPrefixs = [];
        for (let i in cacheKeys) {
            let keyName = cacheKeys[i].name;
            if (keyName) {
                cacheKeyPrefixs.push(keyName);
            }
        }
        return cacheKeyPrefixs;
    }
}

function extendExpiryCacheKey(key) {
    let cacheKeys = [];
    let cacheKeyFields = key.split(':');
    let brid = cacheKeyFields[0];
    let cacheKeyPattern = getAllCacheKeyPrefix();
    for (let i = 0; i < cacheKeyPattern.length; i++) {
        let cacheKey = brid.concat(cacheKeyPattern[i]);
        let canExtend = canExtendTTL(cacheKey);
        if (canExtend) {
            let ttl = getTTL(cacheKey);
            redisClient.expire(cacheKey, ttl);
        }
    }
    return cacheKeys;
}

const getCache = async (key) => {
    return new Promise((resolve, reject) => {
        if (isConAlive() && redisClient.get) {
            redisClient.get(key, function (err, result) {
                if (err) {
                    logger.error(`Redis error in getCache Method -> ${err}.`);
                    reject(err);
                } else {
                    extendExpiryCacheKey(key);
                    resolve(result);
                }
            });
        } else {
            logger.error(`Redis error in connection or getCache Method.`);
            reject(CONSTANTS.APP_ERR_CODES.REDIS_CONN_ERR);
        }
    });
}

const setCache = async (key, value) => {
    return new Promise(() => {
        if (isConAlive() && redisClient.set) {
            let ttl = getTTL(key);
            redisClient.set(key, value, 'EX', ttl);
            redisClient.expire(key, ttl);
        } else {
            logger.error(`Redis error in connection or setCache Method.`);
        }
    });
}

const deleteCache = async (key) => {
    return new Promise(() => {
        if (isConAlive()) {
            redisClient.del(key);
        } else {
            logger.error(`Redis error in connection or deleteCache Method.`);
        }
    });
}

export { getCache, setCache, deleteCache, startRedisCacheManager };
