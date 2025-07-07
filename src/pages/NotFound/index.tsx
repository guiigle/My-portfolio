import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
// This component serves as a fallback for any routes that do not match, displaying a 404 error message.