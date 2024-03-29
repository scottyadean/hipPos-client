

import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { filterItemsByKeyword } from '../../state/reducers/itemReducer';
import { setSeleted } from '../../state/reducers/categoryReducer';
export default function ItemKeyWordSearch() {

    const dispatch = useDispatch();
    



    const searchValue =  (term) => {
            dispatch( filterItemsByKeyword({ term  }));
            dispatch( setSeleted( null )  );
        };
        
        return (<Input placeholder='Search Items' style={{maxWidth:250}}  
                onKeyUp={(evt)=>searchValue(evt.target.value)} />);
    }
