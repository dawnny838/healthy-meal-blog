
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
 
    <div>Viewrecipe</div>
    {/* {recipes&&recipes.length >0 ? ( */}
     { recipes.data?.map((el)=>{
        // console.log("el",el)
        let imgv = "image/"+el.img
        return(
        <div>
         {el.type},
         {el.number},
         {el.name}
         <img src={imgv} width="200" height="100"/>
         {el.ingredient}
         {el.instruction}
         </div>
        )

       
      })
     

    }

  </>  
  )
}

export default Viewrecipe
