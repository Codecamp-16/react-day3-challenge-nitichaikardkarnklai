import React, { useState } from "react";
import ACatCounter from "./components/ACatCounter";
import Form from "./components/Form";

function App() {

  const [catStack, setCatStack] = React.useState([]); // {name: xxx, country: xxx, key:xxx, count:xxx}
  const [totalCat, setTotalCat] = React.useState(0);
  const [totalCount, setTotalCount] = React.useState(0);
  const [catLeader, setCatLeader] = React.useState([{name: "-", country: "-", key: "", count: 0}]); // {name: xxx, country: xxx, key:xxx, count: xxx}

  const handleDelete = (key, deleteCount) => {
    setCatStack(c => {
      const newStackAfterDelete = c.filter(el => el.key !== key);
      evaLeader(newStackAfterDelete);
      return newStackAfterDelete;
    });
    setTotalCat(c => c - 1);
    setTotalCount(c => c - deleteCount);
  }

  const evaLeader = (cloneCatStack) => {
    // console.log(cloneCatStack);
    const maxObj = cloneCatStack.reduce((acc, el) => {
      acc = acc.count > el.count ? acc : el;
      return acc;
    },cloneCatStack[0])
    const tempCatLeader = cloneCatStack.filter(el => el.count == maxObj.count);
    // console.log(tempCatLeader);
    setCatLeader(tempCatLeader);
  }

  const catRender = catStack.map(el => 
    <ACatCounter key={el.key} catItem = {el} 
    onDelete={handleDelete}
    totalCount = {totalCount}
    setTotalCount = {setTotalCount}
    catStack = {catStack}
    setCatStack = {setCatStack}
    evaLeader = {evaLeader}
    />);

  function Leader() { return (<ul>{leaderComponent}</ul>)}
  const leaderComponent = catLeader.map((el)=> {
      return (<div key={el.key}> {el.name} from {el.country}</div>)});

  return (
    <div className="main">
      <div className="dashboard">
        <h1>POP CAT CHALLENGE</h1>
        <div className="panel">
            <div>Total Cat: <div className="bigNum">{totalCat}</div></div>
            <div>Total Count: <div className="bigNum">{totalCount}</div></div>
            <div>Highest Click: <div className="bigNum">{catLeader[0].count}</div></div>
            <div>Cat Leader: <div className="leader"><Leader /></div></div>
        </div>
      </div>
      <Form 
        catStack={catStack} 
        setCatStack={setCatStack} 
        totalCat={totalCat} 
        setTotalCat={setTotalCat}
        evaLeader={evaLeader}
      />
      <div className="catStack">
        {catRender}
      </div>
    </div>
  );
}

export default App;