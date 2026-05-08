import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <UserCount count={count} />
      <Users increment={setCount} />
    </div>
  );
}

export default App;