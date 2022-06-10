
import { react, useEffect, useState } from "react";
import styled from "styled-components";

const Viewingredient = () => {

  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    
    fetch(`/api/get-ingredients`)
      .then(response =>response.json())
      .then((data)=>{
        console.log("ingredients",data)
        setIngredients(data)
         
      })
      .catch((error)=>{
        console.log("View ingredients error", error)
      });
  
  }, []);

  return (
  <>
 
    <h1>View Major Ingredients(Link to Wiki)</h1>
    <br></br>
    {/* {recipes&&recipes.length >0 ? ( */}
    
     { ingredients.data?.map((el)=>{
        // console.log("el",el)
        let url="https://en.wikipedia.org/wiki/"+el.name
        let urlc="https://en.wikipedia.org/wiki/"+el.cname

    return(
        <Wrapper>
           {/* <a target="_blank" href="https://en.wikipedia.org/wiki/Canada">Canada</a> */}
         <Div1>{el.number}</Div1>
         
         {/* <Div2>{el.name}</Div2> */}
         <Div2><a target="_blank" href= {url}>{el.name}</a></Div2>
         <Div3><a target="_blank" href= {urlc}>{el.cname}</a></Div3>

         {/* <Div3>{el.cname}</Div3> */}
         <Div4>{el.function}</Div4>
         </Wrapper>
        )     
      })   
    }
  </>  
  )
}

export default Viewingredient

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 30px ;
  grid-template-columns: 30px 150px 60px 250px;
  gap: 10px 20px;
  background: #fff;
  position: relative;
  margin-left: 50px;
  border-bottom: 10px;
  /* margin-bottom: 10px; */
`;

const Div1 =styled.div`
grid-column: 1/2;
grid-row: 1/2;
`
const Div2 =styled.div`
grid-column: 2/3;
grid-row: 1/2;
font-size: 18px;
font-weight: 400;
`
const Div3 =styled.div`
grid-column: 3/4;
grid-row: 1/2;

`
const Div4 =styled.div`
grid-column: 4/5;
grid-row: 1/2;
`
