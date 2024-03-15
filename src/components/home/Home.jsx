import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filter, setFilter] = useState("All");

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      const data = await res.data;
      setPosts(data);
    } catch (error) {
    } finally {
    }
  };

  const handlePostSearch = (e) => {
    const text = e.target.value.trim().toLowerCase();
    setFilteredPosts(
      posts.filter((post) => post.title.toLowerCase().includes(text)) &&
        posts.filter((post) => post.category.toLowerCase().includes(text))
    );
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    if (filter === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === filter));
    }
  };

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div className="home">
      <div className="nav">
        <div className="navbar container">
          <Link to={"/"}>
            <h4 className="navbar-items">Home</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Business</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Entertainment</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">General</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Health</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Science</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Sports</h4>
          </Link>
          <Link to={"/"}>
            <h4 className="navbar-items">Technology</h4>
          </Link>
        </div>
      </div>
      <div className="container posts-head">
        <h2 className="h2">Our Latest Posts</h2>
        <input
          type="text"
          placeholder="Search..."
          className="posts-head-search"
          onChange={handlePostSearch}
        />
        <select
          name="filter"
          id="filter"
          className="posts-head-filter"
          value={filter}
          onChange={handleFilter}
        >
          <option value="All">All</option>
          <option value="science">Science</option>
          <option value="innovation">Innovation</option>
          <option value="industry">Industry</option>
        </select>
      </div>
      <div className="cards container">
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <div className="cards-item">
              <img src={post.image} alt="" />
              <div className="category">{post.category}</div>
              <div className="cards-item-title">
                <h5>{post.title}</h5>
                <p>Floyd Miles &nbsp;&nbsp;&nbsp;&nbsp; 3 Days Ago</p>
                <Link to={`/posts/${post.id}`}>
                  <button>See More...</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
