// Open terminal
// npx create-react-app textbook_recommendation
// npm start
/* eslint-disable */

import logo from './logo.svg';
import './App.css';  // CSS location
import { useState } from 'react';

function App() {

  let title = 'Textbook Recommendation'
  // let, var, const == works same
  // {} Data binding
  let [name, change_name] = useState(['Textbook #1', 'Textbook #2', 'Textbook #3']);
  let [like, add_like] = useState(0);

  // How to use State
  // let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  // let [a, c] = [1, 2];

  // function add_one(){
  //   console.log(1);
  // }
  // which equals to ()=>{console.log(1)}

  return (
    <div className="App">

      <div className="black-nav">  {/* Use className for JSX */}
        <h4 style={{color: 'white', fontSize: '16px'}}>{title}</h4>
        <h4 style={{color: 'white', fontSize: '16px', position: 'absolute', right: 20}}>Yehyun</h4>
      </div>

      <button onClick={() => {
        let copy1 = [...name];  /* ... remove [], then [] add back */
        copy1[0] = 'test';
        change_name(copy1);
      }}>Change Textbook</button>
    
      <button onClick={()=>{
          let copy2 = [...name.sort()];
          change_name(copy2);
        }}>Sort Alphabetically</button>

      <div className="list">
        <h4>{name[0]} <span onClick={() => {add_like(like + 1)}}>👍</span> {like} </h4>
        <p>April 23, 2023</p>
      </div>

      <div className='list'>
        <h4>{name[1]} <span onClick={() => {add_like(like + 1)}}>👍</span> {like} </h4>
        <p>April 23, 2023</p>
      </div>

      <div className='list'>
        <h4>{name[2]} <span onClick={() => {add_like(like + 1)}}>👍</span> {like} </h4>
        <p>April 23, 2023</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
    {/* <> is same as div. Use one div and div inside. Modal reduce code. */}
  return (
    <div className='modal'>
      <h4>Name</h4>
      <p>Date</p>
      <p>Description</p>
    </div>
  )
}

export default App;
