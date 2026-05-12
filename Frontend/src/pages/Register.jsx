import React, { useState } from "react";

const Register = () => {
  const [initialData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    profile: null,
    address: "",
  });

  const [formData, setFormData] = useState(initialData);

  const handleFormData = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile") {
      setFormData((prev) => ({
        ...prev,
        profile: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
          <legend>Register</legend>
          <div>
            <label htmlFor="profile">Profile Picture</label>
            <input
              type="file"
              name="profile"
              placeholder="Choose Profile Picture"
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleFormData}
            />
          </div>
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
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleFormData}
            />
          </div>
          <div>
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              name="address"
              value={formData.address}
              onChange={handleFormData}
            />
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
