import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RedirectIfAuthenticated({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isHr = useSelector((state) => state.auth.user?.role == 1);
  const isMg = useSelector((state) => state.auth.user?.role == 2);

  if (isAuthenticated) {
    if (isHr) return <Navigate to="/hr" />;
    if (isMg) return <Navigate to="/mg" />;
    return <Navigate to="/" />;
  }
  return children;
}
