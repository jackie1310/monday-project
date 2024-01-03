import { Routes, Route } from 'react-router-dom';
import BoardSetUp from './pages/BoardSetUp/BoardSetUp';
function App() {
  return (
    <>
      <Routes>
        <Route path='/board' Component={BoardSetUp}/>
      </Routes>
    </>
  );
}

export default App;
