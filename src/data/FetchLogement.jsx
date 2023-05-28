import{ useEffect, useState } from 'react';

const Data = () => {
    const [logements, setLogements] = useState([]);
   
    useEffect(() => {
      fetch('/logements.json')
        .then((response) =>response.json())
        .then((data) => setLogements(data))
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return logements
};

export default Data;