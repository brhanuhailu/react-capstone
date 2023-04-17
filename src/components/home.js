import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchCrypto } from '../redux/crypto/cryptoSlice';
import Loading from './loads';

const Home = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.cryptoData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.crypto.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));
  if (coins.isLoding || coins.isEror) {
    return <Loading />;
  }

  return (
    <header className="home-container">
      <div className="home-serch">
        <input
          type="text"
          value={search}
          placeholder="Search Coins..."
          onChange={handleSearch}
        />
      </div>
      <div className="home-list">
        {filteredCoins.length === 0 ? (
          <h1>No related coins found!</h1>
        ) : (
          filteredCoins.map((coin) => (
            <div key={coin.id} className="container-card">
              <img src={coin.icon} alt={coin.name} />
              <div className="container-card-info">
                <h1>{coin.name}</h1>
                <p>
                  Price: $
                  {coin.price.toFixed(2)}
                </p>
              </div>
              <NavLink to={`/details/${coin.id}`}>
                <FaArrowAltCircleRight className="link" />
              </NavLink>
            </div>
          ))
        )}
      </div>
    </header>
  );
};

export default Home;