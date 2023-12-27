import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import About from './components/About/About';

const App: React.FC = () => {
  const initialBeers = ['Coreff', 'Corona', 'Mort Subite'];
  const [beerList, setBeerList] = React.useState<string[]>(initialBeers);

  const handleAddBeer = (beer: string) => {
    setBeerList([...beerList, beer]);
  };

  const handleRemoveBeer = (index: number) => {
    const updatedList = [...beerList];
    updatedList.splice(index, 1);
    setBeerList(updatedList);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BeerList beers={beerList} onAddBeer={handleAddBeer} onRemoveBeer={handleRemoveBeer} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
