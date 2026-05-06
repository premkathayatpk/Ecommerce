import React, { useState } from "react";

const Login = () => {
  const [initialData] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState(initialData);

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData(initialData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter your Email Address"
              name="email"
              value={formData.email}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
