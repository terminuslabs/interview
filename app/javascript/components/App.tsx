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

export default function App() {
  return (
    <div>
      <div className="py-7 bg-indigo-900 to-cyan-500 flex items-center px-4 mb-12 text-indigo-100">
        <h2 className="text-2xl">Interview App</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Users</h1>
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
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
