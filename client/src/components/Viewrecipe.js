
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
    {recipes&&recipes.length >0 ? ("hello"):(null)

    }

  </>  
  )
}

export default Viewrecipe
