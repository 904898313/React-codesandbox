import React from 'react';
import useLocalStorage from '../../hooks/useLocalstorage';

function UseLocalStorageDome() {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default UseLocalStorageDome;
