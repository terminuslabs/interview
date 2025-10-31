import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  job: string;
  created_at: string;
  updated_at: string;
};

const limit = 10;

export default function App() {
  const [fetching, setFetching] = React.useState(false);
  const [users, setUsers] = React.useState<User[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [fuzzySearch, setFuzzySearch] = React.useState("");

  function fetchUser() {
    setFetching(true);
    const urlParams = new URLSearchParams();
    urlParams.append("limit", limit.toString());
    urlParams.append("offset", ((currentPage - 1) * limit).toString());
    urlParams.append("fuzzy_search", fuzzySearch);
    fetch(`/users?${urlParams.toString()}`)
      .then((response) => response.json())
      .then((data) => {
        setFetching(false);
        setUsers(data.users);
        setTotalUsers(data.total);
      });
  }

  React.useEffect(() => {
    fetchUser();
  }, [currentPage, fuzzySearch]);

  function destroyUser(userId: number) {
    fetch(`/users/${userId}`, {
      method: "DELETE",
    }).then(() => {
      fetchUser();
    });
  }

  return (
    <div>
      <div className="py-7 bg-indigo-900 to-cyan-500 flex items-center px-4 mb-12 text-indigo-100">
        <h2 className="text-2xl">Interview App</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Users</h1>

        <div className="flex justify-between items-end">
          <input
            type="text"
            value={fuzzySearch}
            onChange={(e) => setFuzzySearch(e.target.value)}
            placeholder="Search users..."
            className="border border-gray-300 rounded-md p-2 mb-4 w-full max-w-sm"
          />
          <div className="text-right">
            Showing {(currentPage - 1) * limit + 1} - {currentPage * limit} of{" "}
            {totalUsers} users
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Job
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody style={{ opacity: fetching ? 0.5 : 1 }}>
              {users.map((user) => (
                <tr className="bg-white border-b border-gray-200" key={user.id}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold">{user.name}</span>
                      <div className="mt-1">{user.phone_number}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.job}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => destroyUser(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200 flex items-center gap-2"
                    >
                      Destroy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="self-center">
            Page {currentPage} of {Math.ceil(totalUsers / 10)}
          </span>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
            onClick={() =>
              setCurrentPage((prev) =>
                prev * 10 < totalUsers ? prev + 1 : prev
              )
            }
            disabled={currentPage * 10 >= totalUsers}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
