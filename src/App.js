import './App.css';
import {useState} from "react";
function App() {
    const [type, setType] = useState("Normal")
    const [name, setName] = useState("")


  return (
      <div className={"container bg-primary-subtle"}>
        <h1 className={"d-flex justify-content-center"}>To Do App</h1>
          <div className={"d-flex justify-content-around"}>
              <input type={"text"} placeholder={"Nhập tên"}/>
              <select className="form-select" aria-label="Default select example">

                  <option value="Important">Important</option>
              </select>
          </div>


      </div>
  );
}

export default App;
