import { Route, Routes } from "react-router";
import Bookspage from "./pages/Bookspage/Bookspage";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Signuppage from "./pages/Signuppage/Signuppage";
import Userbook from "./pages/userbooks/Userbook";
import UserInfo from "./pages/user/Userinfo";
import Adminpage from "./pages/Adminpage/Adminpage";
import Adminloginpage from "./pages/Adminpage/Adminloginpage";
import BookDetailspage from "./pages/Bookspage/BookDetailspage";
import Adminadd from "./pages/Adminpage/Adminadd";
import AdminsendEmail from "./pages/Adminpage/AdminsendEmail";
import Adminborrowedbook from "./pages/Adminpage/Adminborrowedbook";
import Admintakebook from "./pages/Adminpage/Admintakebook";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Loginpage />} />
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Signuppage" element={<Signuppage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Bookspage" element={<Bookspage />} />
          <Route path="/Userbook" element={<Userbook />} />
          <Route path="/UserInfo" element={<UserInfo />} />
          <Route path="/Adminpage" element={<Adminpage />} />
          <Route path="/Adminloginpage" element={<Adminloginpage />} />
          <Route path="/BookDetailspage" element={<BookDetailspage />} />
          <Route path="/Adminadd" element={<Adminadd />} />
          <Route path="/AdminsendEmail" element={<AdminsendEmail />} />
          <Route path="/Adminborrowedbook" element={<Adminborrowedbook/>} />
          <Route path="/Admintakebook" element={<Admintakebook/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
