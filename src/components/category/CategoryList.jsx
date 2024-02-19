


import { useDispatch,  useSelector } from 'react-redux';

import CategoryItem from './CategoryItem';
import { filterByCat } from '../../state/actions/itemActions';

export default function CategoryList() {

  const cats = useSelector((state) => state.category)
  //const status = useSelector((state) => state.items.status)
  const dispatch = useDispatch();

  return (
    <div>
        <CategoryItem data={cats.rows} callback={(evt)=>filterByCat(dispatch, evt.target.getAttribute('data-id')  )} />
    </div>
  )
}
