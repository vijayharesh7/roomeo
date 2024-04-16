import './searchBar.scss'
import { useState } from 'react';

const types = ['Flatshare', 'rent']
function SearchBar(){
    const [query,setQuery] =useState({
        type:"rent",
        location: "",
        minPrice:0,
        maxPrice:0,
    });

    const switchType = (val) => {
        setQuery((prev)=>({...prev, type:val}));
    };
  return (
    <div className='searchBar'>
        <div className='type'>
        {types.map((type)=>(
            <button 
                key={type} 
                onClick={()=> switchType(type) }
                className={query.type===type? "active":""}
            >
                {type}
            </button>
        ))}
        </div>
        <form>
            <input type='text' name='location'  placeholder='City Location'/>
            <input type='number' name='minPrice' min={0} max={100000} placeholder='Min Price'/>
            <input type='number' name='maxPrice'  min={0} max={100000} placeholder='Max Price'/>
            <button className='button1'>
                search
            </button>
        </form>

    </div>
  )
}

export default SearchBar
