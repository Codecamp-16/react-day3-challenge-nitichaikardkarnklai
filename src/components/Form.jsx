import React from 'react'
import { nanoid } from "nanoid";

function Form(props) {
    const [catName, setCatName] = React.useState("");
    const [catCountry, setCatCountry] = React.useState("");
    const [showFaultInput, setShowFaultInput] =  React.useState("");

    const {catStack, setCatStack, totalCat, setTotalCat, evaLeader} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if(catName.trim() && catCountry.trim()){
          setShowFaultInput(false);
    
          const newCatCard = {
            name: catName, 
            country: catCountry, 
            key: nanoid(),
            count: 0
          };
          setTotalCat(c => c + 1);
          const newCatStack = [...catStack, newCatCard]
          setCatStack(newCatStack);
          evaLeader(newCatStack);

          setCatName("");
          setCatCountry("");
        } else {
          setShowFaultInput("ได้โปรด... ใส่ข้อมูลให้ครบทุกช่องขอรับครับกระผม");
        }
    }
    
    const handleCatNameChange = (event) => {
        setCatName(event.target.value);
        setShowFaultInput("");
    }
    const handleCatCountryChange = (event) => {
        setCatCountry(event.target.value);
        setShowFaultInput("");
    }

  return (
    <form>
        <h1>ลงทะเบียนแมว</h1>
        <label>Name</label>
        <input onChange={handleCatNameChange} value={catName} type="text" placeholder="Cat Name"/>
        <label>Country</label>
        <select value = {catCountry} id="country" name="country" onChange={handleCatCountryChange}>
          <option value="">Choose Cat Country...</option>
          <option value="USA">USA</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
        </select>
        {showFaultInput && <p>{showFaultInput}</p>}
        <button onClick={handleSubmit} type="submit">Join</button>
    </form>
  )
}

export default Form