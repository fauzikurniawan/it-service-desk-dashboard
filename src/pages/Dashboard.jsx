import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">IT Service Desk & DC Ops</h2>
        <p className="text-slate-600">Welcome to internal operations dashboard.</p>
      </div>
    </Layout>
  );
}
