import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


//Create Category List with all
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


//Create Price List without all
const allPrices= [ ...new Set(items.map((item)=> item.price))];


//Test it
console.log(allCategories)
console.log(allPrices)



function App() {

  //useState for menu items
  const [menuItems, setMenuItems] = useState(items);

  //useState for categories
  const [categories, setCategories] = useState(allCategories);

  //useState for prices
  const [prices, setPrices] = useState(allPrices);

  //Filter for categories
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  //Filter for prices
  const filterItemsp = (price) => {
   
    const newItems = items.filter((item) => item.price === price);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}  prices={prices} filterItemsp={filterItemsp}/>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
