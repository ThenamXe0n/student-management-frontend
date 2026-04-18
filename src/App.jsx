import ManageStudentPage from "./page/ManageStudentPage";
import { Route, Routes } from "react-router";
import LoginPage from "./page/LoginPage";
import ProtectedRoute from "./services/ProtectedRoute";
import RegisterPage from "./page/RegisterPage";
import ForgetPasswordPage from "./page/ForgetPasswordPage";
import ResetPasswordPage from "./page/ResetPasswordPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ManageStudentPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route
          path="/reset-password/:resetToken"
          element={<ResetPasswordPage />}
        />
        <Route
          path="*"
          element={
            <section className="h-screen w-screen bg-black flex items-center justify-center ">
              404 not found!
            </section>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
