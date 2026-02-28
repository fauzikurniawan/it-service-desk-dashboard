import { useState } from "react";
import Layout from "../components/Layout";

export default function Tickets() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Server DC Down",
      category: "Data Center",
      priority: "High",
      status: "Open",
    },
    {
      id: 2,
      title: "User tidak bisa login",
      category: "IT Support",
      priority: "Medium",
      status: "In Progress",
    },
  ]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    priority: "Low",
    status: "Open",
  });

  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      setTickets(
        tickets.map((t) =>
          t.id === editId ? { ...t, ...form } : t
        )
      );
      setEditId(null);
    } else {
      const newTicket = {
        id: Date.now(),
        ...form,
      };
      setTickets([...tickets, newTicket]);
    }

    setForm({ title: "", category: "", priority: "Low", status: "Open" });
  }

  function handleEdit(ticket) {
    setForm({
      title: ticket.title,
      category: ticket.category,
      priority: ticket.priority,
      status: ticket.status,
    });
    setEditId(ticket.id);
  }

  function handleDelete(id) {
    if (confirm("Yakin mau hapus ticket ini?")) {
      setTickets(tickets.filter((t) => t.id !== id));
    }
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Ticket Incident</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 space-y-3">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul Ticket"
          className="border p-2 w-full rounded"
          required
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Kategori (IT Support / DC Ops)"
          className="border p-2 w-full rounded"
          required
        />

        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          {editId ? "Update Ticket" : "Add Ticket"}
        </button>
      </form>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-left">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Priority</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="p-2">{t.title}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2">{t.priority}</td>
                <td className="p-2">{t.status}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(t)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}