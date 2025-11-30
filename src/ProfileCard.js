 import React from "react";

function ProfileCard() {
  return (
    <section className="card profile-card">
      <div className="avatar">
        <span>S</span>
      </div>
      <h2>Sihan Udayaratna</h2>
      <p className="profile-role">Frontend / React Learner</p>

      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <p className="profile-note">
        “Practicing every day to become a better developer.”
      </p>
    </section>
  );
}

export default ProfileCard;
