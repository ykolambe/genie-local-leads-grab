
import { Navigate } from "react-router-dom";

const Index = () => {
  // Just redirect to the Home page
  return <Navigate to="/" replace />;
};

export default Index;
