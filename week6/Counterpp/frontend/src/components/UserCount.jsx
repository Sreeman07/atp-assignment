function UserCount({ count }) {
  return (
    <div className="text-center text-2xl font-bold p-4 bg-white shadow">
      Total Users Added: {count}
    </div>
  );
}

export default UserCount;