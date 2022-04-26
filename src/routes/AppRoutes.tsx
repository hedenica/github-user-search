import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { User } from '../pages/User/User';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  );
};
