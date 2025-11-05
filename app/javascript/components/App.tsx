import React from 'react';

export default function App() {
  return (
    <div className="min-h-dvh bg-off-gray">
      <div className="fixed bottom-0 h-2 start-0 end-0 bg-light-green"></div>

      <div className="bg-white py-8 mb-12 border-light-green border-b-4">
        <h2 className="max-w-5xl text-3xl mx-auto text-dark-green font-bold">
          Interview App
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-5">Users</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-off-white ">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-lg">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Job
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-lg"></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
