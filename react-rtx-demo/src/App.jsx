import React from 'react'
import CakeView from './features/cake/cakeView';
import IcecreamView from './features/icecream/icecreamView';
import UserView from './features/user/userView';
const App = () => {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App;
