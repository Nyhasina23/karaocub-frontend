import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import SingIn from "./views/authentication/SingIn";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<SingIn />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<SingIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const WithNav = () => {
  return (
    <>
      <div className="w-full mb-14">
        <Outlet />
      </div>
      {/* <NavBar /> */}
    </>
  );
};
const WithoutNav = () => {
  return <Outlet />;
};
export default App;
