import { Data } from './statistic';
import PropTypes from 'prop-types';
import css from '../css/statistics.module.css';

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stats__list}>
        {statistics.map(statistic => (
          <li key={statistic.id} className={css.stats}>
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
