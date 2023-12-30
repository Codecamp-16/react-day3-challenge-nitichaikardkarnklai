import React from 'react'
import { nanoid } from "nanoid";

function Form(props) {
    const [catName, setCatName] = React.useState("");
    const [catCountry, setCatCountry] = React.useState("");
    const [showFaultInput, setShowFaultInput] =  React.useState("");

    const {catStack, setCatStack, totalCat, setTotalCat} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("submit");
        // console.log(nanoid());
    
        if(catName.trim() && catCountry.trim()){
          setShowFaultInput(false);
    
          const newCatCard = {
            name: catName, 
            country: catCountry, 
            key: nanoid(),
            count: 0
          };
          setCatStack(c => [...c, newCatCard]);
    
          setCatName("");
          setCatCountry("");
          setTotalCat(c => c + 1)
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