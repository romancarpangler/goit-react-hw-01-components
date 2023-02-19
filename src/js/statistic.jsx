import PropTypes from 'prop-types';
import css from '../css/statistics.module.css';

export const Data = ({ statistic }) => {
  const { label, percentage } = statistic;
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

Data.propTypes = {
  statistic: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
