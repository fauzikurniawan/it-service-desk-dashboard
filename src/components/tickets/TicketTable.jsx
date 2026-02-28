export default function TicketTable({ tickets, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 text-xs font-semibold uppercase text-slate-600">Title</th>
            <th className="p-2 text-xs font-semibold uppercase text-slate-600">Category</th>
            <th className="p-2 text-xs font-semibold uppercase text-slate-600">Priority</th>
            <th className="p-2 text-xs font-semibold uppercase text-slate-600">Status</th>
            <th className="p-2 text-xs font-semibold uppercase text-slate-600">Action</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((t) => (
            <tr key={t.id} className="border-t hover:bg-slate-50 transition">
              <td className="p-2 text-slate-800">{t.title}</td>
              <td className="p-2 text-slate-600">{t.category}</td>

              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold
                      ${t.priority === "High" ? "bg-red-100 text-red-700" : t.priority === "Medium" ? "bg-orange-100 text-orange-700" : "bg-slate-100 text-slate-700"}
                    `}
                >
                  {t.priority}
                </span>
              </td>

              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold
                      ${t.status === "Open" ? "bg-yellow-100 text-yellow-700" : t.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}
                    `}
                >
                  {t.status}
                </span>
              </td>

              <td className="p-2 space-x-2">
                <button onClick={() => onEdit(t)} className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700">
                  Edit
                </button>
                <button onClick={() => onDelete(t.id)} className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {tickets.length === 0 && (
            <tr>
              <td colSpan="5" className="py-10 text-center text-slate-400">
                No tickets found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
