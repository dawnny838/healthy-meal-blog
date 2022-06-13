import { useState, useContext } from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";



const CommentForm = ({user,email}) => {
  
  
  const [comment, setComment] = useState("");
  // const [email, setEmail] = useState("");
  
  // const history = useHistory(); //use for going back

  const handleSubmit =(e)=>{
    e.preventDefault();

    fetch('/api/add-comment',{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
        //send info to BE, then mongodb
          user:user,
          email:email,
          comment: comment,
      }), 
  })
  .then((response) => response.json())
  
  // 
  .then (setComment(""))
  .catch((error)=>{
    console.log("Comment Error", error)
  })
  };

  return (
    <Wrapper>
    
        <Cform>
         
          <Form onSubmit={handleSubmit}>
              <textarea cols="100" rows="3"
                placeholder="Your Comment"
                required
                value={comment}
                onChange={(e)=>{
                  setComment(e.target.value)}}
              
              />
             
              {/* <input 
                type= "text"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
              }}
              /> */}
            <button type="submit">Submit</button>
          </Form>
        </Cform> 
    </Wrapper>
  );
};

export default CommentForm;

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
}

textarea{
  background-color: light-gray;
  margin-bottom: 10px;
  height: 100px;
  width: 400px;
  font-size:16px;
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
