import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Greetings() {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/hello/index')
      .then((response) => setGreeting(response.data.content));
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greetings;
