import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import SingIn from "./views/authentication/SingIn";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import UserPage from "./views/users/UserPage";
import NavBar from "./componentes/NavBar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route element={<WithoutNav />}>
                <Route path="/" element={<SingIn />} />
              </Route>
              <Route element={<WithNav />}>
                <Route path="/user" element={<UserPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

const WithNav = () => {
  return (
    <>
      <NavBar />
      <div className="w-full mb-14">
        <Outlet />
      </div>
    </>
  );
};
const WithoutNav = () => {
  return <Outlet />;
};
export default App;
