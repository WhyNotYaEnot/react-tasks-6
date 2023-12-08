import React, { useState, useEffect } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="date-time">
      <CurrentDate currentDate={currentTime} />
      <CurrentTime currentTime={currentTime} />
    </div>
  );
};

export default DateTime;