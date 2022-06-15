// import React from 'react'

// const Addrecipe = () => {
//   return (
//     <div>Addrecipe</div>
//   )
// }

// export default Addrecipe
import { useState, useContext } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";



const AddRecipe = ({user,email}) => {
  
  
  // const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");

  // const history = useHistory(); //use for going back

  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch('/api/add-recipe',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
        //send info to BE, then mongodb
          // user:user,
          // nemail:email,
          number: number,
          type: type,
          name: name,
          img: img,
          ingredient: ingredient,
          instruction: instruction,
      }), 
  })
  .then((response) => response.json())
  
  // 
  .then (setNumber(""))
  .then (setType(""))
  .then (setName(""))
  .then (setImg(""))
  .then (setIngredient(""))
  .then (setInstruction(""))
 
  .catch((error)=>{
    console.log("Comment Error", error)
  })
  };

  return (
    <Wrapper>
    
        <Cform>
         
          <Form onSubmit={handleSubmit}>
             
              <input 
                type= "text"
                placeholder="number"
                required
                value={number}
                onChange={(e)=>{
                  setNumber(e.target.value)
              }}
              />
              <input 
                type= "text"
                placeholder="type"
                required
                value={type}
                onChange={(e)=>{
                  setType(e.target.value)
              }}
              />
              <input 
                type= "text"
                placeholder="name"
                required
                value={name}
                onChange={(e)=>{
                  setName(e.target.value)
              }}
              />
              <input 
                type= "text"
                placeholder="img"
                required
                value={img}
                onChange={(e)=>{
                  setImg(e.target.value)
              }}
              />
              <input 
                type= "text"
                placeholder="ingredient"
                required
                value={ingredient}
                onChange={(e)=>{
                  setIngredient(e.target.value)
              }}
              />
              <input 
                type= "instruction"
                placeholder="instruction"
                required
                value={instruction}
                onChange={(e)=>{
                  setInstruction(e.target.value)
              }}
              />
            <button type="submit">Submit</button>
          </Form>
        </Cform> 
    </Wrapper>
  );
};

export default AddRecipe;

const Wrapper = styled.div`

h1{
  margin-top: 20px;
}
`

const Cform = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;
  
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  height: 250px;
  border: 2px solid var(--color-alabama-crimson);
  margin-left: 50px;
  

  input{
    border: 1px solid;
    padding: 8px;
    margin-bottom:5px;
}



button{
  /* background-color: var(--color-alabama-crimson); */
  background-color: blue;
  color: whitesmoke;
  border-radius: 10%;
  width: 80px;
  height: 40px;

  cursor: pointer;
  /* &:hover,&active{ */
  &:active{
        transform: scale(1.1, 1.1);
        transition: 500ms;
        /* cursor: pointer; */
    }

}
`
