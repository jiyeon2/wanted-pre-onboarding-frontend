import { Navigate, useLocation } from "react-router-dom";

import { getJWT } from "../../utils/localStorage";

function RequireToken({ children }) {
  const location = useLocation();
  const token = getJWT();

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireToken;
