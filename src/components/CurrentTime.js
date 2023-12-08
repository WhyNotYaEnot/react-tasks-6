import React from 'react';

const CurrentTime = ({ currentTime }) => {
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedTime = currentTime.toLocaleTimeString('uk-UA', options);

  return <div className="current-time">{formattedTime}</div>;
};

export default CurrentTime;