import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import differenceInWeeks from 'date-fns/difference_in_weeks';
import format from 'date-fns/format';

export const createdAt = (date) => {
  const NOW = new Date().toISOString();
  const diff = differenceInWeeks(NOW, date);

  return diff < 1
    ? distanceInWordsStrict(NOW, date, { addSuffix: true })
    : format(date, 'MMM D');
};

export default createdAt;
