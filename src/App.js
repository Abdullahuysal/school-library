import { Route, Routes } from "react-router";
import Bookspage from "./pages/Bookspage/Bookspage";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Signuppage from "./pages/Signuppage/Signuppage";
import Userbook from "./pages/userbooks/Userbook";
import UserInfo from "./pages/user/Userinfo";
import Adminpage from "./pages/Adminpage/Adminpage";
import Adminloginpage from "./pages/Adminpage/Adminloginpage";
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
