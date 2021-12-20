import { Route, Routes } from "react-router";
import Bookspage from "./pages/Bookspage/Bookspage";
import Homepage from "./pages/Homepage/Homepage";
import Loginpage from "./pages/Loginpage/Loginpage";
import Signuppage from "./pages/Signuppage/Signuppage";
import UserInfo from "./pages/user/UserInfo";
import Userbook from "./pages/userbooks/Userbook";
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
          <Route path="/UserInfo" element={<UserInfo/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
