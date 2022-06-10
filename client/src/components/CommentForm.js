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
        //send info to BE, at this point we dont have id
          user:user,
          email:email,
          comment: comment,
      }), 
  })
  .then((response) => response.json())
  // .then((data)=>{
  //   //receving data from BE now, include the id
  //   const reservation = {
  //     id: data.reservationId,
  //     flight:currentFlight,
  //     seat:currentSeat,
  //     givenName,
  //     surname,
  //     email,
  //   }
  //   setCurrentReservation(reservation) //set as data we want
  //   // add for store
  //   localStorage.setItem("reservation",JSON.stringify(reservation))

  //   console.log("seatSelect data", data)
  //   console.log("reservation", reservation)
  //   console.log("currentReservation",currentReservation)
  //   //send user name to local storage
   
  //   history.push('/confirmed');
    // comment to force flow
    //  if(currentReservation.seat !== "" || currentReservation.flight !== ""){
    //   history.push('/confirmed');
    // }
    // else {
    //   setSeatSelectStatus("missing info");
    // }
  // })
  .catch((error)=>{
    console.log("Comment Error", error)
  })
  };

  return (
    <Wrapper>
      {/* <FlightSelect currentFlight={currentFlight} setCurrentFlight={setCurrentFlight}/>
      <h1 className="">Select your seat and Provide your information!</h1> */}
        <Cform>
          {/* <Plane currentSeat={currentSeat} setCurrentSeat={setCurrentSeat}/> */}
          
          <Form onSubmit={handleSubmit}>
              <textarea cols="200" rows="3"
                placeholder="Your Comment"
                required
                value={comment}
                onChange={(e)=>{
                  setComment(e.target.value)}}
              
              />
              {/* <input 
                type= "text"
                placeholder="Your Comment"
                required
                value={comment}
                onChange={(e)=>{
                  setComment(e.target.value)
              }}
              /> */}


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
  &:hover,&ative{
        transform: scale(1.1, 1.1);
        transition: 500ms;
        /* cursor: pointer; */
    }

}
`
