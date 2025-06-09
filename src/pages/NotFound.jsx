import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <p>How did you get here this does not exist.</p>
      <Link to={"/home"}>Go back to the homepage</Link>
    </div>
  );
}

export default NotFoundPage;