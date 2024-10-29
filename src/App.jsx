import './App.css';
import { useState } from 'react';

const App = () => {
  const samosaImageUrl = 'https://images.rawpixel.com/image_png_800/cHJpvmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNl9zYW1vc2Ffb2ZfaW5kaWFuX2Zvb2Rpc29sYXRlZF9vbl9jb2xvcl9iYWNrZ183MWZmNDEzMC0wMDg5LTRmOTQtOGVjYS1iYzU3MGMyZmZhNWUucG5n.png';

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', multiplier: 2, cost: 10, description: '2x per click' },
    { name: 'Party Pack 🎉', multiplier: 5, cost: 100, description: '5x per click' },
    { name: 'Full Feast 👩🏽‍🍳', multiplier: 10, cost: 1000, description: '10x per click' },
  ];

  const handleClick = () => {
    setCount(count + multiplier);
  };

  const purchaseUpgrade = (upgradeCost, upgradeMultiplier) => {
    if (count >= upgradeCost) {
      setCount(count - upgradeCost);
      setMultiplier(upgradeMultiplier);
    } else {
      alert('Not enough samosas!');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
      </div>
      <img className="samosa" src={samosaImageUrl} alt="Samosa" onClick={handleClick} />
      <div className="container">
        {upgrades.map((upgrade) => (
          <div key={upgrade.name} className="upgrade">
            <h3>{upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <button onClick={() => purchaseUpgrade(upgrade.cost, upgrade.multiplier)}>
              {upgrade.cost} samosas
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
