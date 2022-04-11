import LoginPresenter from './presenters/loginPresenter';
import Register from './View/register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <Routes>
     <Route exact path="/" element={<LoginPresenter/>}/>
     <Route exact path="/register" element={<Register/>}/>
   </Routes>
  );
}
export default App;
