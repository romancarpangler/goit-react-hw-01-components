import PropTypes from 'prop-types';
import css from '../css/friends.module.css';

export const Data = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <>
      <span className={`${css.status} ${css[isOnline]}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

Data.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
