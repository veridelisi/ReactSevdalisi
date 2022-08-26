1)-
data.js

2)-
App.js
We import Review.js ( import Review from './Review'; )

3)-
Review.js

We import data ( import data from "./data";)

We setup usestate and we will use for getting index number

  const [index, setIndex] = useState(0);
  
We extract data and use with state. This is very short method
  const { name, job, image, text } = data[index];
  
We write 2 functions for Next and Prev.
In these functions, setIndex creates newIndex value by increasing/decreasing default index number.
We talk about checkNumber

const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  

Control the number for boundries with checkNumber

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  
When you click "Next button" in the last record which index number is 3, newIndex will be 4
The following will work 

const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
  }
    
    in action
    
    const checkNumber = (4) => {
    if (4 > 4 - 1) {
      return 0;
    }
    
When you click "Prev button" in the first record which index number is 0, newIndex will be -1
The following will work  
  
  if (number < 0) {
      return data.length - 1;
    }
    
    in action
    
     if (-1 < 0) {
      return 4 - 1;
    }
    

