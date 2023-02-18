export const Data = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
