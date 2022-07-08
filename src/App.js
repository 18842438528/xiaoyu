import { LoginIndex } from './scanes/login/index'
import { PasswordIndex } from './scanes/password/index'
import { CheckInboxIndex } from './scanes/checkInbox';
import { CreateIndex } from './scanes/create';
import { HomePageIndex } from './scanes/homePage';
import { PerformanceIndex } from './scanes/performance';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginIndex />} />
          <Route path="/passwordindex" element={<PasswordIndex />} />
          <Route path='/checkinboxindex' element={<CheckInboxIndex />} />
          <Route path='/createindex' element={<CreateIndex />} />
          <Route path='/homepageindex' element={<HomePageIndex />}/>
          <Route path='/performanceindex' element={<PerformanceIndex />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
