export default function TicketForm({ form, onChange, onSubmit, editId }) {
  return (
    <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
      <input
        name="title"
        value={form.title}
        onChange={onChange}
        placeholder="Judul Ticket"
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        name="category"
        value={form.category}
        onChange={onChange}
        placeholder="Kategori (IT Support / DC Ops)"
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500"
        required
      />

      <select
        name="priority"
        value={form.priority}
        onChange={onChange}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select
        name="status"
        value={form.status}
        onChange={onChange}
        className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500"
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        {editId ? "Update Ticket" : "Add Ticket"}
      </button>
    </form>
  );
}