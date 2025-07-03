import { useState } from "react";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../UI/AuthModal.jsx";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [showAuth, setShowAuth] = useState(false); // Modal state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backendURL = "http://localhost:5000";

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    setShowAuth(true); // Show the modal instead of dispatching immediately
  }

  // Callback for successful auth
  function handleAuthSuccess() {
    dispatch(updateName(username));
    setShowAuth(false);
    navigate("/menu");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="mb-4 text-sm text-stone-600 md:text-base">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onClick={() => setShowAuth(true)}
          onChange={(e) => setUsername(e.target.value)}
          className="w-72 input mb-8"
        />

        {username !== "" && (
          <div>
            <Button type="primary">Start ordering</Button>
          </div>
        )}
      </form>
      {showAuth && (
        <AuthModal
          backendURL={backendURL}
          username={username}
          onClose={() => setShowAuth(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default CreateUser;
