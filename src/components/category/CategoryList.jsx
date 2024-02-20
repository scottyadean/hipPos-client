import { useDispatch,  useSelector } from 'react-redux';
import CategoryItem from './CategoryItem';
import { filterByCat } from '../../state/actions/itemActions';
import { filterItemsByKeyword } from '../../state/reducers/itemReducer';
import { setSeleted } from '../../state/reducers/categoryReducer';

//import { FilterOutlined } from '@ant-design/icons';

export default function CategoryList() {
  const cats = useSelector((state) => state.category)
  const dispatch = useDispatch();
  const ResetCat = () => {

    return (
      <a onClick={  ()=> { dispatch( setSeleted( null )  ); 
                           dispatch( filterItemsByKeyword({ term: "" }) ) }  
                 }>clear</a>
    );
  }
  const SetItems = (evt)=>{ 
    const id = evt.target.getAttribute('data-id');
    dispatch( setSeleted( id ) );
    filterByCat(dispatch, id  );
  
  }

  return (
      <>
        <h3>Category { cats.selected &&  (<ResetCat />) }</h3>
        <CategoryItem data={cats.rows} 
                      callback={SetItems} />
      </>
  )
}
