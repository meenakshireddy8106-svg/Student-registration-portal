import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialData = {
  studentName: "Kapa Meenakshi",
  email: "meenakshireddy8106@gmail.com",
  phone: "8074038106",
  college: "Audisankara College of Engineering and Technology",
  course: "Computer Science Engineering (Data Science)",
  department: "Data Science",
  year: "Final Year"
};

export default function Registration() {
  const [formData, setFormData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="registration-page">
      <div className="form-card">
        <div className="form-heading">
          <p className="eyebrow">STUDENT DETAILS</p>
          <h1>Registration</h1>
          <p>Fill in your details and submit the form.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input name="studentName" value={formData.studentName} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>College Name</label>
          <input name="college" value={formData.college} onChange={handleChange} required />

          <label>Course</label>
          <input name="course" value={formData.course} onChange={handleChange} required />

          <label>Department</label>
          <input name="department" value={formData.department} onChange={handleChange} required />

          <label>Year</label>
          <select name="year" value={formData.year} onChange={handleChange} required>
            <option>Final Year</option>
            <option>Third Year</option>
            <option>Second Year</option>
            <option>First Year</option>
          </select>

          <button className="submit-button" type="submit">Submit Registration</button>
        </form>

        {submitted && (
          <section className="success-box">
            <h2>✓ Registration Successful</h2>
            <p><strong>Student Name:</strong> {formData.studentName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>College:</strong> {formData.college}</p>
            <p><strong>Course:</strong> {formData.course}</p>
            <p><strong>Department:</strong> {formData.department}</p>
            <p><strong>Year:</strong> {formData.year}</p>
          </section>
        )}

        <Link className="back-link" to="/">← Back to Home</Link>
      </div>
    </main>
  );
}