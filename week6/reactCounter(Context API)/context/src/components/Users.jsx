import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Users() {
  const { count, increment } = useContext(CounterContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <h2 className="text-xl font-bold">Card {index + 1}</h2>

            <p className="text-3xl my-4">{count}</p>

            <button
              onClick={increment}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Increment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;