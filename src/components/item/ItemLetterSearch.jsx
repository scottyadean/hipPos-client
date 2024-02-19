//import React from 'react'
import { filterByLetter } from '../../state/actions/itemActions';
import { useDispatch } from 'react-redux';
export default function ItemLetterSearch() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const dispatch = useDispatch();
return (
    <div style={{borderRadius:"5px", padding:"5px", maxHeight: "50px", overflow: "hidden"}}>
    
       { alphabet.map( letter=>(  <input type="button" 
                                         className="letter-search" 
                                         onClick={(evt)=>filterByLetter( dispatch, evt.target.value  )} 
                                         key={`letter-btn-${letter}`} 
                                         value={letter} />  ) )  }
    
    </div>
  )
}
