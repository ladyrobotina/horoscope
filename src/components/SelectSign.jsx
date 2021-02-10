import React, { useEffect, useState } from 'react';
import { getSigns } from '../services/api';
import Button from '@material-ui/core/Button';

export const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

  return (
    <>
      <h2>Please select a sign</h2>
      <div className="grid">
        {signs.map((sign) => (
          <Button variant="contained" color="secondary"
            className="sign"
            key={sign}
            onClick={() => onSignSelected(sign)}

          >
            <img src={`/images/${sign}.svg`} width="24" height="24" style={{marginRight:12}} alt="" />
            <span>{sign}</span>
          </Button>
        ))}
      </div>
    </>
  );
};