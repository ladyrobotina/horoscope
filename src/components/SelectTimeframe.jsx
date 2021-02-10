import React from 'react';
import Button from '@material-ui/core/Button';

export const SelectTimeframe = ({
  onTimeframeSelected,
}) => {
  return (
    <>
      <h2>Please select a timeframe...</h2>
      <div className="grid">
        {['yesterday', 'today', 'tomorrow'].map(
          (timeframes) => (
            <Button variant="contained" color="primary"
              className="timeframe"
              key={timeframes}
              onClick={() =>
                onTimeframeSelected(timeframes)
              }
            >
              {timeframes}
            </Button>
          )
        )}
      </div>
    </>
  );
};