
import { react, useEffect, useState } from "react";
import styled from "styled-components";

const Viewrecipe = () => {

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    
    fetch(`/api/get-recipes`)
      .then(response =>response.json())
      .then((data)=>{
        setRecipes(data)
        
        console.log("recipes",data)
      })
      .catch((error)=>{
        console.log("View recipes error", error)
      });
  
  // }, [recipes]);
  }, []);

  return (
  <>
 
    <h1>View Recipe</h1>
    <br></br>
    {/* {recipes&&recipes.length >0 ? ( */}
    
     { recipes.data?.map((el)=>{
        // console.log("el",el)
        let imgv = "image/"+el.img
        return(
        <Wrapper>
         <Div1>{el.type}</Div1>
         <Div2>{el.number}</Div2>
         <Div3>{el.name}</Div3>
         <Div4><img src={imgv} width="200" height="100"/></Div4>
         <Div5>{el.ingredient+" "}</Div5>
         <Div6>{el.instruction}</Div6>
         </Wrapper>
        )     
      })   
    }
  </>  
  )
}

export default Viewrecipe

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 28px);
  grid-template-columns: 60px 60px 80px 20px 400px;
  gap: 2px 2px;
  background: #fff;
  position: relative;
  margin-left: 50px;
`;

const Div1 =styled.div`
grid-column: 1/2;
grid-row: 1/2;
`
const Div2 =styled.div`
grid-column: 2/3;
grid-row: 1/2;
`
const Div3 =styled.div`
grid-column: 1/4;
grid-row: 2/3;
font-size: 18px;
font-weight: 400;
`
const Div4 =styled.div`
grid-column: 1/3;
grid-row: 3/6;
img {
  border-radius:10%;
}

`
const Div5 =styled.div`
grid-column: 5/5;
grid-row: 1/3;
display: flex;
padding-right: 15px;
`
const Div6 =styled.div`
grid-column: 5/5;
grid-row: 4/6;
`
