import React, { useState } from "react";
import "./styles.css"; // Import the main styling file

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const GreetUser = (props) => {
  return <p className="greet-user">Hello, {props.name}!</p>;
};

const DynamicMessage = ({ initialMessage }) => {
  const [message, setMessage] = useState(initialMessage);

  const updateMessage = () => {
    setMessage("New Message!");
  };

  return (
    <div className="dynamic-message-container">
      <p className="dynamic-message">{message}</p>
      <button className="update-message-button" onClick={updateMessage}>
        Update Message
      </button>
    </div>
  );
};

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="user-form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      {/* Example 1: State */}
      <h2>Example 1: State</h2>
      <Counter />

      {/* Example 2: Props */}
      <h2>Example 2: Props</h2>
      <GreetUser name="John" />

      {/* Example 3: Integrating State and Props */}
      <h2>Example 3: Integrating State and Props</h2>
      <DynamicMessage initialMessage="Hello, React!" />

      {/* Advanced Example 1: Advanced State Management */}
      <h2>Example 4: State Management</h2>
      <UserForm />

      {/* Advanced Example 2: Props in Action */}
      <h2>Example 5: Props in Action</h2>
      <Card
        title="React Mastery"
        content="Unlock the power of React components."
      />
      <Card
        title="Data Visualization"
        content="Transforming complex data into insightful visuals."
      />
    </div>
  );
};

export default App;
