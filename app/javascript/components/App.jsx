import React from "react";

export default function App() {
  return (
    <div>
      <div className="py-7 bg-indigo-900 to-cyan-500 flex items-center px-4 mb-12 text-indigo-100">
        <h2 className="text-2xl">Interview App</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Users</h1>
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Job
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Employed
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
