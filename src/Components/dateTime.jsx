import React from 'react';

const DateTime = ({ date }) => {
  const options = { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  
  return (
    <span className="datetime">{formattedDate}</span>
  );
};

export default DateTime;
