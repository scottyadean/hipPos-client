//import React from 'react'
import { filterByLetter } from '../../state/actions/itemActions';
import { filterItemsByKeyword } from '../../state/reducers/itemReducer';
import { ClearOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
export default function ItemLetterSearch() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const dispatch = useDispatch();

  const resetFilter = (_evt)=>{ dispatch( filterItemsByKeyword({ term: "" }) );  }


return (
    <div style={{borderRadius:"5px", padding:"5px", maxHeight: "50px", overflow: "hidden"}}>
    
       { alphabet.map( letter=>(  <input type="button" 
                                         className="letter-search" 
                                         onClick={(evt)=>filterByLetter( dispatch, evt.target.value  )} 
                                         key={`letter-btn-${letter}`} 
                                         value={letter} />  ) )  }
                                  <button 
                                         className="letter-search" 
                                         onClick={resetFilter} 
                                         key={`letter-btn-reset`} 
                                         value="" >  <ClearOutlined /> </button> 
                                         
    
    </div>
  )
}
