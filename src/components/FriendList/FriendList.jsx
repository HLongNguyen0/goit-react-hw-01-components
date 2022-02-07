import PropTypes from 'prop-types';
import { FriendListBox, FriendListElem } from '../FriendList/FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendListBox>
      {friends.map(friend => {
        return (
          <FriendListElem key={friend.id} status={friend.isOnline}>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{friend.name}</p>
          </FriendListElem>
        );
      })}
    </FriendListBox>
  );
}

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
