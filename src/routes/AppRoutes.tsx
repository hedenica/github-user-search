import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { User } from '../pages/User';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  );
};
