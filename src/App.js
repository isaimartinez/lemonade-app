import { Routes, Route} from 'react-router-dom'
import {Menu, Tour} from './pages'

function App() {
  return (
    <div className='flex relative  select-none'>
      <div className='bg-main  w-full min-h-screen'>
        <div>
          <Routes>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/tour" element={<Tour />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
