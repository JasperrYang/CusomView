import React, { useState, ReactElement } from 'react';

const Button: React.FC<{ count: number; onClick: () => void; comp: ReactElement; event: any}> = ({ count, onClick, comp, event }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input 
        type='text'
        value={value}
        onChange={e => {
          setValue(e.currentTarget.value);
          event.emit('eventMsg', e.currentTarget.value);
        }
        } />
      <button 
        onClick={onClick}
      >
        当前记录：{count}
      </button>
      {comp}
    </div>
  );
}

export default Button;
