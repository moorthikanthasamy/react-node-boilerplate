import React from "react";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <html>
          <title> Utilty Manager</title>
          <head>
            <link rel="stylesheet" href="dist/style.css" />
          </head>
          <body>
            <div id="root" />
            <script src="dist/client-bundle.js" type="text/javascript" defer />
          </body>
        </html>
      </React.Fragment>
    );
  }
}

export default Home;
