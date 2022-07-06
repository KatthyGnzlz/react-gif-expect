import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpectApp = () => {

    const [ categories, setCategories ] = useState(['Naruto']);

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;
        
        setCategories([ newCategory, ...categories ]);
    }


  return (
    <>

        <h1> GifExpectApp </h1>
        

        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory ={ onAddCategory }
        />


        
        
        { 
            categories.map( category => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            ))
        }
            


    </>
  )
}
