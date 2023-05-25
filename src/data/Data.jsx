import React from 'react';
import{ useEffect, useState } from 'react';

const Data = () => {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
      fetch('/data/logements.json')
        .then((response) => console.log(response))
        .then((data) => {
          setLogements(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    
};

export default Data;