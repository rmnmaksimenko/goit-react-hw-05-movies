import Trending from 'pages/Trending';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import { Layout } from './Layout';

// api_key = 1b4670fa78c776f91ad91934fb8aeb13

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Trending />} />
          <Route path="hashboard" element={<div>Hashboard</div>} />
        </Route>
      </Routes>
    </div>
  );
};
