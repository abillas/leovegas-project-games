import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        flexDirection: "column",
      }}
    >
      <h1 style={{ margin: 0 }}>404 Page Not Found</h1>
      <p>Sorry, that page does not exist</p>
    </div>
  );
};

export default NotFound;
