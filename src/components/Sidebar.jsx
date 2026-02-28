import React from "react";export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">IT Ops</h2>

      <nav className="space-y-2">
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 transition">Tickets</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 transition">DC Ops</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 transition">Users</button>
        <button className="w-full text-left px-3 py-2 rounded hover:bg-slate-700 transition">Logs</button>
      </nav>
    </aside>
  );
}
