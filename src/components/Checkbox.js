import React,  { useState, useEffect  } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Checkboxes = () => {
    const [checked, setChecked] = useState(true);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  
    return (
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    );
}

export default Checkbox;

