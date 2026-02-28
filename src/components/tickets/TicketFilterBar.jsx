export default function TicketFilterBar({ search, setSearch, status, setStatus }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <input
        className="w-64 rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
        placeholder="Search ticket..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select className="rounded border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-blue-500" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All Status</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Closed">Closed</option>
      </select>
    </div>
  );
}
