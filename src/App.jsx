import './App.css';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';

function App() {

  return (
    
        <BrowserRouter>
          <DefaultLayout>
          <Routes>
            
              <Route path='/' element={<HomePage />} />
              <Route path='/items' element={<ItemsPage />} />
            
          </Routes>
          </DefaultLayout>
        </BrowserRouter>
    
    )
}

export default App
