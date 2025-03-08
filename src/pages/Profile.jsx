import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    profilePicture: "https://via.placeholder.com/100", // Placeholder image
    name: "Low Chun Wei",
    birthday: "February 13, 2004",
    gender: "Male",
    email: "chunweillow7901@gmail.com",
    phone: "+601156959725",
    homeAddress: "Parkhill",
    workAddress: "Asia Pacific University"
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => ({
        ...prevUser,
        profilePicture: imageUrl
      }));
    }
  };

  return (
    <div className="profile-container">
      {/* Profile Picture Section */}
      <div className="profile-picture-section">
        <div className="profile-row">
          <p className="profile-label">Profile picture</p>
          <p className="profile-description">
          </p>
          <label htmlFor="profile-upload" className="profile-pic-container">
            <img src={user.profilePicture} alt="Profile" className="profile-picture" />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleProfilePictureUpload}
          />
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="profile-card">
        <h2 className="profile-subtitle">Basic Info</h2>
        <div className="profile-info">
          <div className="profile-row">
            <p className="profile-label">Name</p>
            {isEditing ? (
              <input type="text" name="name" value={user.name} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.name}</p>
            )}
          </div>
          <div className="profile-divider"></div>

          <div className="profile-row">
            <p className="profile-label">Birthday</p>
            {isEditing ? (
              <input type="text" name="birthday" value={user.birthday} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.birthday}</p>
            )}
          </div>
          <div className="profile-divider"></div>

          <div className="profile-row">
            <p className="profile-label">Gender</p>
            {isEditing ? (
              <select name="gender" value={user.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="profile-value">{user.gender}</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="profile-card">
        <h2 className="profile-subtitle">Contact Info</h2>
        <div className="profile-info">
          <div className="profile-row">
            <p className="profile-label">Email</p>
            {isEditing ? (
              <input type="email" name="email" value={user.email} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.email}</p>
            )}
          </div>
          <div className="profile-divider"></div>

          <div className="profile-row">
            <p className="profile-label">Phone</p>
            {isEditing ? (
              <input type="tel" name="phone" value={user.phone} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Address Info Section */}
      <div className="profile-card">
        <h2 className="profile-subtitle">Address</h2>
        <div className="profile-info">
          <div className="profile-row">
            <p className="profile-label">Home</p>
            {isEditing ? (
              <input type="text" name="homeAddress" value={user.homeAddress} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.homeAddress}</p>
            )}
          </div>
          <div className="profile-divider"></div>

          <div className="profile-row">
            <p className="profile-label">Work</p>
            {isEditing ? (
              <input type="text" name="workAddress" value={user.workAddress} onChange={handleChange} />
            ) : (
              <p className="profile-value">{user.workAddress}</p>
            )}
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="edit-button-container">
        <button className="edit-button" onClick={handleEditToggle}>
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}

export default Profile;