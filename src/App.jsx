import React, { useState } from "react";
import ACatCounter from "./components/ACatCounter";
import Form from "./components/Form";

function App() {

  const [catStack, setCatStack] = React.useState([]); // {name: xxx, country: xxx, key:xxx}
  const [totalCat, setTotalCat] = React.useState(0);
  const [totalCount, setTotalCount] = React.useState(0);
  const [catLeader, setCatLeader] = React.useState({name: "-", country: "-", key: "-", count: 0}); // {name: xxx, country: xxx, key:xxx, count: xxx}
  let catCandidate = {name: "", country: "", key: "", count: 0}; // {name: xxx, country: xxx, key:xxx, count: xxx}

  const handleDelete = (key, deleteCount) => {
    setCatStack(c => c.filter(el => el.key !== key));
    setTotalCat(c => c - 1);
    setTotalCount(c => c - deleteCount);
  }

  const evaLeader = (catItem, count) => {
    catCandidate = {...catItem, count : count};

    // if (catLeader.count < catCandidate.count) {
    //   setCatLeader({...catCandidate});
    // } else if (catLeader.key == catCandidate.key) {
    //   setCatLeader({...catCandidate});
    // }
  }

  const catRender = catStack.map(el => 
    <ACatCounter key={el.key} catItem = {el} onDelete={handleDelete}
    totalCount = {totalCount}
    setTotalCount = {setTotalCount}

    evaLeader = {evaLeader}
    />);

  return (
    <div className="main">
      <div className="dashboard">
        <h1>POP CAT CHALLENGE</h1>
        <div>Total Cat: {totalCat}</div>
        <div>Total Count: {totalCount}</div>
        <div>Cat Leader: {catLeader.name} from {catLeader.country}</div>
        <div>Highest Click: {catLeader.count}</div>
      </div>
      <Form 
        catStack={catStack} 
        setCatStack={setCatStack} 
        totalCat={totalCat} 
        setTotalCat={setTotalCat}
      />
      <div className="catStack">
        {catRender}
      </div>
    </div>
  );
}

export default App;