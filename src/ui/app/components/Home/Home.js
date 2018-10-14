import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <html>
          <title> React Sample App</title>
          <head>
            Welcome to React App
            <link rel="stylesheet" href="style.css" />
          </head>
          <body>
            <div id="root" />
            <script src="1.client-bundle.js" type="text/javascript" defer />
            <script src="client-bundle.js" type="text/javascript" defer />
          </body>
        </html>
      </React.Fragment>
    );
  }
}

export default Home;
