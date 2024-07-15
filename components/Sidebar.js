import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home'); // State to track active item

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Update active item when clicked
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
          Home
        </li>
        <li className={activeItem === 'Line Chart' ? 'active' : ''} onClick={() => handleItemClick('Line Chart')}>
          Line Chart
        </li>
        <li className={activeItem === 'Bar Chart' ? 'active' : ''} onClick={() => handleItemClick('Bar Chart')}>
          Bar Chart
        </li>
        <li className={activeItem === 'Pie Chart' ? 'active' : ''} onClick={() => handleItemClick('Pie Chart')}>
          Pie Chart
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
