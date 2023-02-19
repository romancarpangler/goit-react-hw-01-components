import PropTypes from 'prop-types';
import { Data } from './friend';
import css from '../css/friends.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map(friend => (
        <li className={css.friends__item} key={friend.id}>
          <Data friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
