import { Data } from './statistic';
import PropTypes from 'prop-types';

export const Statistics = ({ statistics }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statistics.map(statistic => (
          <li key={statistic.id}>
            <Data statistic={statistic} />
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};
