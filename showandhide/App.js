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
    <button  onClick={showCartHandler}    > Open </button>
    <button  onClick={hideCartHandler}    > Close </button>
    
    {cartIsShown && <NewPage/>}
    </>
  );
}

export default App;
