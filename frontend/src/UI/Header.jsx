import { Link, useNavigate } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useState, useEffect } from "react";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setLoggedIn(false);
    navigate("/"); // Redirect to home or login page
    window.location.reload(); // Optional: force refresh to update UI
  };

  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 sm:px-6 border-b border-stone-200 flex items-center justify-between">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Company
      </Link>
      <SearchOrder />
      <div className="flex items-center gap-4">
        <Username />
        {loggedIn && (
          <button
            onClick={handleLogout}
            className="bg-white text-yellow-500 px-3 py-1 rounded uppercase font-semibold hover:bg-yellow-100 transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
