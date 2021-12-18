import './App.css';
import './components/frame/styles/Frame.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { accountService } from './components/_services';
import { Role } from './components/_helpers';

import { Frame } from './components/frame/Frame';
import { Alert, Navigation, PrivateRoute } from './components/_utils';

import { Account } from './components/account/Index';
import { Home } from './components/home/Home';
import { Profile } from './components/profile/Index';
import { Admin } from './components/admin/Index';
import { Course } from './components/pages/Course';
import { Exercise } from './components/pages/Exercise';
import { Calculator } from './components/pages/Calculator';
import { Vocabulary } from './components/pages/Vocabulary';
import { Simulation } from './components/pages/Simulation';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  return (
    <div style={{ width: '100%', position: 'fixed', top: 0, border: '1px solid #343B4B' }}>
      <div className="startApp">
        <Navigation />
        <div className={'mainApp' + (!user ? ' notLogged' : '')}>
          <div className={'topbar' + (!user ? ' notLogged' : '')}>
            <Frame />
          </div>
          <div className='banner'>
            <Alert />
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={<Profile />} />
                <Route path="/admin/*" roles={[Role.Admin]} element={<Admin />} />
                <Route path="/course" element={<Course />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/vocabulary" element={<Vocabulary />} />
                <Route path="/simulation" element={<Simulation />} />
              </Route>
              <Route path="/account/*" element={<Account />} />
              <Route path="*" element={<div>דף זה אינו קיים!</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
