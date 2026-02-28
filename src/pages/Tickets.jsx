import { useState } from "react";
import Layout from "../components/Layout";
import TicketForm from "../components/tickets/TicketForm";
import TicketTable from "../components/tickets/TicketTable";
import TicketFilterBar from "../components/tickets/TicketFilterBar";

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

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTickets = tickets.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" ? true : t.status === statusFilter;
    return matchSearch && matchStatus;
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      setTickets(tickets.map((t) => (t.id === editId ? { ...t, ...form } : t)));
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
      <TicketForm form={form} onChange={handleChange} onSubmit={handleSubmit} editId={editId} />
      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <TicketFilterBar search={search} setSearch={setSearch} status={statusFilter} setStatus={setStatusFilter} />

        <TicketTable tickets={filteredTickets} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </Layout>
  );
}
