import { Routes, Route } from 'react-router-dom';
import Invites from './pages/Invites';
function App() {
  return (
    <>
      <Routes>
        <Route path="/create" Component={Invites}/>
      </Routes>
    </>
  );
}

export default App;
