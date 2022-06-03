import classes from "./Header.module.css";

const Header = (props) => {
  return (
 <>
      <header className={classes.header}>
        <h1>Show and Hide </h1>
        <button onClick={props.onShowCart}>I'm for open </button>
        <button onClick={props.onClose}>I'm for close</button>
      </header>
      
      </>
  
  );
};

export default Header;
