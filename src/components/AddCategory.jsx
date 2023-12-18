import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [input, setInput] = useState('');

    const onInputChange = (event)=>{
        setInput(event.target.value)
    };

    const onSubmit = (event)=>{
        event.preventDefault();

        if(input.trim().length <=1) return;
        
        onNewCategory(input.trim() );
        setInput('');
    };

  return (
    <form onSubmit={event => onSubmit(event) }>
        <input 
        type='text'
        value={input} 
        placeholder="Buscar Gifs"
        onChange={onInputChange}>
        
        </input>
    </form>
  )
}
