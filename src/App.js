import { Routes, Route } from 'react-router-dom';
import TableColumn from './pages/TableColumn/TableColumn';
function App() {
  return (
    <>
      <Routes>
        <Route path="/column" Component={TableColumn}/>
      </Routes>
    </>
  );
}

export default App;
