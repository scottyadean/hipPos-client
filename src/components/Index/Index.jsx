import CategoryList from "../category/CategoryList"
import ItemList from "../item/ItemList"
import ItemLetterSearch from '../item/ItemLetterSearch';
import ItemKeyWordSearch from '../item/ItemKeyWordSearch';
export default function Index() {
  return (
    <>
      <div className="wrapper">
        <CategoryList />
        <ItemKeyWordSearch />
        <ItemList />  
        <div className="push"></div>  
      </div>
      <footer className="footer">
        <ItemLetterSearch />
      </footer>
    </>
  )
}
