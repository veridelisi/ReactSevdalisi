1)-

App.js

We setup useState
const [cartIsShown, setCartIsShown] = useState(false);


We install 2 functions for onclick operations.

const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
We write the onclick events

<button  onClick={showCartHandler}> Open </button>
<button  onClick={hideCartHandler}> Close </button>


If cartIsShown is False, user cannot see NewPage.js
If cartIsShown is True, user can see NewPage.js
{cartIsShown && <NewPage/>}

  Doç.Dr.Engin YILMAZ
  
  
  
