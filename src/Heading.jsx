import React from "react";

function Heading() {
  const date = new Date();
  const hour = date.getHours();

  const customStyle = {
    color: ""
  };
  let greeting;
  if (hour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
