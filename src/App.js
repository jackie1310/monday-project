import { Routes, Route } from 'react-router-dom';
import TableItem from './page/TableItem/TableItems';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={TableItem}/>
      </Routes>
    </>
  );
}

export default App;
