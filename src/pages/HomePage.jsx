import { useDispatch  } from 'react-redux';
import { getCategoryList } from '../state/actions/categoryActions';
import { getItemList } from '../state/actions/itemActions';
import Index from '../components/Index/Index';



export default function HomePage() {
  
  const dispatch = useDispatch();
  const getCats = async () => await getCategoryList(dispatch);
  const getItems = async () => await getItemList(dispatch);
  
  getCats();
  getItems();
  
  return ( <Index />  )
}
