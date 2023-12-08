import React from 'react';

const CurrentDate = ({ currentDate }) => {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('uk-UA', options);

  return <div className="current-date">{formattedDate}</div>;
};

export default CurrentDate;