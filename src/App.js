import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { accountService } from './components/_services';
import { Role } from './components/_helpers';

import { Account } from './components/account/Index';
import { Alert, Nav, PrivateRoute } from './components/_utils';
import { Home } from './components/pages/Home';
import { Profile } from './components/profile/Index';


function App() {
  const [user, setUser] = useState({});

    // let users = localStorage.getItem('users');
    // // lessonsService.lessons().then((values) => {
    // //   console.log(values)
    // // })
    // //accountService.postAllUsers(JSON.parse(users));
  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // useEffect(() => {
  //   // Load the todos on mount
  //   const usersStrings = localStorage.getItem("users");
  //   if (usersStrings) {
  //     console.log("In1")
  //     const users = JSON.parse(usersStrings);
  //     setUserData(users);
  //     accountService.postAllUsers();
  //   }
  //   // Respond to the `storage` event
  //   function storageEventHandler(event) {
  //     if (event.key === "users") {
  //       console.log("In2")
  //       const users = JSON.parse(event.newValue);
  //       setUserData(users);
  //     }
  //   }
  //   // Hook up the event handler
  //   window.addEventListener("storage", storageEventHandler);
  //   return () => {
  //     // Remove the handler when the component unmounts
  //     window.removeEventListener("storage", storageEventHandler);
  //   };
  // }, []);

  return (
    <div className={"App " + (user && ' bg-light')}>
      <Nav />
      <Alert />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />}/>
        </Route>
        <Route path="/account/*" element={<Account />} />
        <Route path="*" element={<div>Not Found!</div>} />
      </Routes>
    </div>
  );
}

export default App;
