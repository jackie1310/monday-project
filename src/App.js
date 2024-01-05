import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Create}/>
      </Routes>
    </>
  );
}

export default App;
