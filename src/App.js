import { Routes, Route } from 'react-router-dom';
import Role from './pages/Role';
function App() {
  return (
    <>
      <Routes>
        <Route path='/create' Component={Role} />
      </Routes>
    </>
  );
}

export default App;
