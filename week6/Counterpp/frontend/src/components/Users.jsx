import { useEffect, useState } from "react";
import axios from "axios";

function Users({ increment }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
        >
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>

          <button
            onClick={() => increment((prev) => prev + 1)}
            className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;