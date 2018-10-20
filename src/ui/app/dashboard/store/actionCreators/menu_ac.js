import SHOW_COMPONENT from "../constants";
console.log(SHOW_COMPONENT);

const showComponent = component => {
  return {
    type: SHOW_COMPONENT,
    component: component
  };
};

export { showComponent };
