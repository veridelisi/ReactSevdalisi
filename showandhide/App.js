import { useState } from 'react';
import NewPage from './NewPage';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <>
    <p>cartIsShown  is FALSE , when you click open button, cartIsShown will TRUE</p>
    <button  onClick={showCartHandler}    > Open </button>
    <button  onClick={hideCartHandler}    > Close </button>
    
    {cartIsShown && <NewPage/>}
    </>
  );
}

export default App;
