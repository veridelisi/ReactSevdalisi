1.We have datas in data.js

2. App.js
We take datas from data.js      ( import data from "./data";)
We install useState             ( const [datas, setDatas] = useState(data);)
Now data in the datas state
We filter the datas and sent to List as info prop            ( <List info={datas.filter((fill)=> fill.age>32)}></List>   )


3. List.js
We take props as info          (const info = props.info;)
Map it                         ({infom.map((item)=> (

                                        <>
                                        <h1>{item.age}</h1>
                                        <h2>{item.name}</h2>
                                        </>

                                ))}

