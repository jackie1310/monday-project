import { Routes, Route } from 'react-router-dom';
import SocialAds from './pages/SocialAds';
function App() {
  return (
    <>
      <Routes>
        <Route path='/create' Component={SocialAds}/>
      </Routes>
    </>
  );
}

export default App;
