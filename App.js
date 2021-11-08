import React ,{useState} from "react";



function App() {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent =(event) =>{

    setItem(event.target.value);
  }

  const listOfItem = () =>{
    setNewItem((preValue) => {
      return [  ...preValue , item]
    });
  };
  // setItem(" ")


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> This is my to do list  </h1>
          <br />
          <input type="text" value= {item}   placeholder="add an item" onChange= {itemEvent} />

          <button className="newBtn" onClick= {listOfItem}>
            Add
          </button>
          <br />
          <ol>
            {newitem.map( (val)  =>{
              return <li> {val} </li>;          
            })}
                
          </ol>
          <br />
        </div>
      </div>
    </>

  );
}

export default App;