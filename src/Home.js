import React, { useState } from 'react';
import axios from 'axios';
const Home = () => {
  const [number, setNumber] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    await axios.get("https://setuserver.herokuapp.com/consent/" + number, {mode: 'no-cors'}).then(response => window.location.replace(response.data))
    
  }

  return (
    <>
      <article>
        
          <div className='form-control'>
            <label htmlFor='number'>Name : </label>
            <input
              type='number'
              id='number'
              name='number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} >add person</button>
        
        
      </article>
    </>
  );
};

export default Home;