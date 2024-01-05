import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Role from './pages/Role';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Role}/>
      </Routes>
    </>
  );
}

export default App;
