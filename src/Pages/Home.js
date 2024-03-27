import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // navigating programmatically if timer expeires of something like this. but better us Link for easy way to nav
  function navigateHandler() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Home</h1>
      <p>
        go to <Link to="/products">list of products</Link>
      </p>
      <button onClick={navigateHandler}>navigate</button>
    </div>
  );
}

export default Home;
