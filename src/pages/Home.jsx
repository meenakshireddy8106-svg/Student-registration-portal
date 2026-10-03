import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-card">
        <div className="sparkle">✦ ✧ ✦</div>
        <p className="eyebrow">AUDISANKARA COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
        <h1>Student Registration Portal</h1>
        <p className="hero-text">
          Welcome to Meenakshi's student registration portal. Enter your
          academic details through the registration form and view your
          submitted information instantly.
        </p>
        <Link className="gold-button" to="/registration">Register Now →</Link>
      </section>

      <section className="info-grid">
        <div className="info-card">
          <span>🎓</span>
          <h3>Student Registration</h3>
          <p>Simple and user-friendly registration form.</p>
        </div>
        <div className="info-card">
          <span>📚</span>
          <h3>Academic Details</h3>
          <p>Capture department and final-year information.</p>
        </div>
        <div className="info-card">
          <span>✨</span>
          <h3>Instant Result</h3>
          <p>View the submitted student details immediately.</p>
        </div>
      </section>
    </main>
  );
}