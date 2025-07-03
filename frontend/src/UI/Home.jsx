import { useState, useEffect } from "react";
import Button from "./Button.jsx";
import AuthModal from "../UI/AuthModal.jsx"; // Adjust the path as needed

function Home() {
  const [userName, setUserName] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const backendURL = "http://localhost:5000";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (token && name) {
      setUserName(name);
    } else {
      setUserName("");
    }
  }, []);

  // Handler for successful auth (optional, if you want to update name instantly)
  const handleAuthSuccess = (user) => {
    setUserName(user.name);
  };

  return (
    <div className="my-10 sm:my-16 text-center px-4">
      <h1 className="text-xl font-semibold  mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {userName === "" ? (
        <>
          <Button type="primary" onClick={() => setShowAuth(true)}>
            Get Started
          </Button>
          {showAuth && (
            <AuthModal
              backendURL={backendURL}
              onClose={() => setShowAuth(false)}
              onAuthSuccess={handleAuthSuccess}
            />
          )}
        </>
      ) : (
        <Button to="menu" type="primary">
          Continue Ordering, {userName}
        </Button>
      )}
    </div>
  );
}

export default Home;
