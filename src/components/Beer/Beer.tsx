import React from 'react';

interface BeerProps {
  name: string;
}

const Beer: React.FC<BeerProps> = ({ name }) => {
  return <li>{name}</li>;
};

export default Beer;