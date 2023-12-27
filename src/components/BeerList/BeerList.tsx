import React, { FC, useState } from 'react';
import './BeerList.css';
import Beer from '../Beer/Beer';

interface BeerListProps {
  beers: string[];
  onAddBeer: (beer: string) => void;
  onRemoveBeer: (index: number) => void;
}

const BeerList: React.FC<BeerListProps> = ({ beers, onAddBeer, onRemoveBeer }) => {
  const [newBeer, setNewBeer] = useState<string>('');

  const handleAddBeer = () => {
    if (newBeer.trim() !== '') {
      onAddBeer(newBeer);
      setNewBeer('');
    }
  };
  

  return (
    <div>
      <h2>Liste de bières préférées</h2>
      <ul>
        {beers.map((beer, index) => (
          <div key={index}>
            <Beer name={beer} />
            <button onClick={() => onRemoveBeer(index)}>Retirer</button>
          </div>
        ))}
      </ul>
      <div>
        <input type="text" value={newBeer} onChange={(e) => setNewBeer(e.target.value)} />
        <button onClick={handleAddBeer}>Ajouter</button>
      </div>
    </div>
  );
};

export default BeerList;
