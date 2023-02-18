import PropTypes from 'prop-types';
import { Data } from './friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <Data friend={friend} />
        </li>
      ))}
    </ul>
  );
};
