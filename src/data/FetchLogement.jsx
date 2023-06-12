import { createContext, useEffect, useState } from 'react';

const Data = () => {
  const [logements, setLogements] = useState({});
  useEffect(() => {
    async function fetchListing() {
      fetch('/logements.json')
        .then((response) => response.json())
        .then((data) => setLogements(data))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchListing()
  }, []);
  return logements
};

const FindHouseById = async (id) => {
  const data = await fetch('/logements.json')
  console.log(data)
  if (data.ok) {
    const res = await data.json();
    res.map((elt) => {
      if (elt.id === id) {
        data.statut = 404
      }
    })
  }
  console.log(data)
}

export const ListingsContext = createContext()

export const ListingsProvider = ({ children }) => {
  const listingsAPI = Data()

  return (
    <ListingsContext.Provider value={listingsAPI}>
      {children}
    </ListingsContext.Provider>
  )
}


