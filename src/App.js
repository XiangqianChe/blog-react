import './App.scss';
import { Route, Routes } from 'react-router-dom';
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Post from './pages/Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path='post' element={<Post />} />
      </Route>
    </Routes>
  );
}

export default App;
