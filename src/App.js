import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import CreateAccount from './pages/CreateAccount/CreateAccount';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={CreateAccount}/>
      </Routes>
    </>
  );
}

export default App;
