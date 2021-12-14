import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { accountService } from './components/_services';
import { Role } from './components/_helpers';

import { Alert, Nav, PrivateRoute } from './components/_utils';
import { Account } from './components/account/Index';
import { Home } from './components/pages/Home';
import { Profile } from './components/profile/Index';
import { Admin } from './components/pages/Admin';
import { Course } from './components/pages/Course';
import { Exercise } from './components/pages/Exercise';
import { Calculator } from './components/pages/Calculator';
import { Vocabulary } from './components/pages/Vocabulary';
import { Add } from './components/admin-components/addComponents/Add';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  return (
    <div className={"App " + (user && ' bg-light')}>
      <Nav />
      <Alert />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/admin" roles={[Role.Admin]} element={<Admin />}/>
          <Route path="/course" element={<Course />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/addContent" element={<Add />} />
        </Route>
        <Route path="/account/*" element={<Account />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </div>
  );
}

export default App;
