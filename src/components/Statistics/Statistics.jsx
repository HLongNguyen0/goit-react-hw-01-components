import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
  StatisticsElem,
} from '../Statistics/Statistics.styled';

export default function Statistics({ title, data }) {
  return (
    <StatisticsBox>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {data.map(e => (
          <StatisticsElem key={e.id}>
            <span>{e.label}</span>
            <span>{e.percentage}</span>
          </StatisticsElem>
        ))}
      </StatisticsList>
    </StatisticsBox>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
