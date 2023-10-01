// components/Messages.js
import React from "react";
import { Link } from "react-router-dom";

export default function Messages({ users }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link to={`/ChatComponent/${user._id}`}>
              <button>{user.username}</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
