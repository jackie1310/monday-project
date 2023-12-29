import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Welcome}/>
      </Routes>
    </>
  );
}

export default App;
