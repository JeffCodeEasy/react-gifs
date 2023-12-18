import React from 'react';
import {useState} from 'react'
import { AddCategory, GifGrid  } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
  
  const onAddCategory = (newCategory)=>{
    if(categories.includes(newCategory)) return;
    // const name = 'Oni Chan';
    setCategories([...categories, newCategory])
  }


  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
        // addCategory={setCategories}
        onNewCategory={(event) =>onAddCategory(event)}
        />

        {/* <button onClick={onAddCategory} >Agregar</button> */}

        <ol>
            {categories.map((category) => 
            (
              <GifGrid key={category} category={category}/>
            )
            )}

        </ol>

    </>
  )
}


