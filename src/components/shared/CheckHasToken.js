import { Navigate, useLocation } from "react-router-dom";

import { getJWT } from "../../utils/localStorage";

function CheckHasToken({ children }) {
  const location = useLocation();
  const token = getJWT();

  if (token) {
    return <Navigate to="/todo" state={{ from: location }} replace />;
  }
  return children;
}

export default CheckHasToken;
