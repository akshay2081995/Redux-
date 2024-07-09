import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const UserActive = useSelector((state) => state.counter.activeUser);

  //   const user = UserActive;
  return UserActive ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
