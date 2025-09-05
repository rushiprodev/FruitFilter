import { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { name: 'Apple', img: 'https://cdn-icons-png.flaticon.com/128/415/415733.png', bg: 'linear-gradient(135deg, #ff9a9e, #ff6b6b)' },
    { name: 'Banana', img: 'https://cdn-icons-png.flaticon.com/128/590/590685.png', bg: 'linear-gradient(135deg, #fff48c, #ffd700)' },
    { name: 'Grapes', img: 'https://cdn-icons-png.flaticon.com/128/415/415720.png', bg: 'linear-gradient(135deg, #d4a5ff, #9b5de5)' },
    { name: 'Orange', img: 'https://cdn-icons-png.flaticon.com/128/415/415731.png', bg: 'linear-gradient(135deg, #ffb347, #ffcc33)' },
    { name: 'Mango', img: 'https://cdn-icons-png.flaticon.com/128/590/590693.png', bg: 'linear-gradient(135deg, #ffd699, #ffb347)' },
    { name: 'Pineapple', img: 'https://cdn-icons-png.flaticon.com/128/415/415728.png', bg: 'linear-gradient(135deg, #ffe599, #ffd966)' },
    { name: 'Strawberry', img: 'https://cdn-icons-png.flaticon.com/128/415/415719.png', bg: 'linear-gradient(135deg, #ff9aa2, #ff6b81)' },
  ];

  const handleChange = (e) => setSearchTerm(e.target.value);

  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [searchTerm]);

  return (
    <div className="app-container">
      <div className="filter-box">
        <h2>🍓 Fruit Filter</h2>
        <input
          type='text'
          placeholder='Search for a fruit...'
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </div>

      <ul className="fruit-list">
        {filterItems.length > 0 ? (
          filterItems.map((item, index) => (
            <li 
              key={index} 
              className="fruit-item" 
              style={{ background: item.bg }}
            >
              <img src={item.img} alt={item.name} className="fruit-img" />
              <span>{item.name}</span>
            </li>
          ))
        ) : (
          <li className="no-result">No fruits found 🍂</li>
        )}
      </ul>
    </div>
  );
}

export default App;
