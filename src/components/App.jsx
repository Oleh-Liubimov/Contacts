
import { lazy, useEffect } from "react";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("../pages/Homepage/Homepage"))
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"))
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"))
const NotFoundPage = lazy(()=> import("../pages/Not Found/NotFound"))
 

 

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

 