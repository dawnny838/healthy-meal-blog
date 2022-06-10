
import { react, useEffect, useState } from "react";
import styled from "styled-components";

const Viewcomment = () => {

  const [comments, setcomments] = useState([]);
  
  useEffect(() => {
    
    fetch(`/api/get-comments`)
      .then(response =>response.json())
      .then((data)=>{
        console.log("comments",data)
        setcomments(data)
         
      })
      .catch((error)=>{
        console.log("View comments error", error)
      });
  
  }, []);

  return (
  <>
 
    <h1>View Comments</h1>
    <br></br>
    
     { comments.data?.map((el)=>{
        // console.log("el",el)
    return(
        <Wrapper>
         
         <Div1>{el.comment}</Div1>
        </Wrapper>
        )     
      })   
    }
  </>  
  )
}

export default Viewcomment

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4,30px) ;
  grid-template-columns: 30px 150px;
  gap: 10px 20px;
  background: #fff;
  position: relative;
  margin-left: 50px;
  border-bottom: 10px;
  /* margin-bottom: 10px; */
`;

const Div1 =styled.div`
grid-column: 1/3;
grid-row: 1/4;
`

