import { Link, useLocation } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <div className="fixed w-full top-0 z-50">
      <nav className="bg-pink-500 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <Link to="/" className="font-medium text-2xl">
          Home
          </Link>

      {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="border-1  px-4 py-2 rounded w-94 focus-visible:outline-1"
        value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

       <Link to="/about" className="font-medium text-2xl">
         About
          </Link>

        </div>
      </nav>

    </div>
  );
}

export default Navbar;
