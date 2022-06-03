import { useState } from 'react';
import Header from './Header';
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
    
    <Header onShowCart={showCartHandler} onClose={hideCartHandler} />
    {cartIsShown && <NewPage/>}
    </>
  );
}

export default App;
