import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import CreateTable from './pages/CreateTable';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Create}/>
        <Route path='/column' Component={CreateTable}/>
      </Routes>
    </>
  );
}

export default App;
