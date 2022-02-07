import PropTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescription,
  ProfileImg,
  ProfileStats,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileBox>
      <ProfileDescription>
        <ProfileImg src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </ProfileDescription>

      <ProfileStats>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ProfileStats>
    </ProfileBox>
  );
}

Profile.protoType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
