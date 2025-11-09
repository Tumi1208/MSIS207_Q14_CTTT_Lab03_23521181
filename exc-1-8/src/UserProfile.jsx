import PropTypes from 'prop-types';

export default function UserProfile({ userData, theme = 'light' }) {
  const { name, email, avatarUrl, imageSize = 90 } = userData;
  return (
    <div className={`profile-card theme-${theme}`}>
      <h2>User Profile</h2>
      <img
        className="profile-avatar"
        src={avatarUrl}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.string,
};
