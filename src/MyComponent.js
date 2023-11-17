import React, { useState } from "react";
import "./MyComponent.css"; // Importing the stylesheet

const MyComponent = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`my-component ${isExpanded ? "expanded" : ""}`}>
      <h1>{props.greeting}</h1>
      <p>{props.message}</p>

      {/* Dynamic Greeting */}
      <p className="dynamic-greeting">
        Dynamic Greeting:{" "}
        {isExpanded ? "Welcome, React Enthusiast!" : "Click to Expand"}
      </p>

      {/* Conditional Rendering */}
      {isExpanded && <p>This extra message is rendered conditionally.</p>}

      {/* Interactive Button */}
      <button onClick={toggleExpansion}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
};

export default MyComponent;
