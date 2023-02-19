import PropTypes from 'prop-types';

export const Data = ({ statistic }) => {
  const { label, percentage } = statistic;
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};

Data.propTypes = {
  statistic: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
