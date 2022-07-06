import {LoginIndex} from './scanes/login/index'
import {PasswordIndex} from './scanes/password/index'
import { CheckInboxIndex } from './scanes/checkInbox';
import { CreateIndex } from './scanes/create';
import { HomePageIndex } from './scanes/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={  <LoginIndex/>} />
          <Route path="/passwordindex" element={<PasswordIndex/>} />
          <Route path='/checkinboxindex' element={<CheckInboxIndex/>}/>
          <Route path='/createindex' element={<CreateIndex/>}/>
          <Route path='/homepageindex' element={<HomePageIndex/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
