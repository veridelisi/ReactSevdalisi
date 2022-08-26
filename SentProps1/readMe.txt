1).
Data comes from data.js
Please look at data.js 
This is very cool and simple method fshort databases
In this sample we have only 5 persons and their datas

2).
We have datas and we need to arrange these datas
App.js is our landing(center) page
We import data from Data.js (import data from "./data";)
We also import List.js page (import List from "./List";) because we will sent datas to List.js
This is very simple
data is created in data.js, importing in App.js, sending to List.js

3).
We create useState (    const [datas, setDatas] = useState(data);  )
Importing data is converting useState object as datas
We sent this state object to List.js as props  
but
We use map function in the here and sent "item" as props

{datas.map((item)=> (
        <List key={item.id} {...item}></List>
      ))}


4).
In the List.js takes this props' parts directly in props location between brackets 

   const List = ({ id, name, age, image })
   
   and we use directly as follows
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
        
        
    
    Doç.Dr.Engin YILMAZ
