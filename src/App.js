import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import SignUp from './pages/SignUp';
import Create from './pages/Create';

=======
import SocialAds from './pages/SocialAds';
>>>>>>> VietAn/socialAds
function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path='/' Component={SignUp}/>
        <Route path='/create' Component={Create}/>
=======
        <Route path='/create' Component={SocialAds}/>
>>>>>>> VietAn/socialAds
      </Routes>
    </>
  );
}

export default App;
