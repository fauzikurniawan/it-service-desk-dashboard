export default function DeleteConfirmModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[320px] rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-2 text-lg font-semibold text-slate-800">Delete Ticket?</h3>
        <p className="mb-4 text-sm text-slate-600">This action cannot be undone.</p>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="rounded border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
            Cancel
          </button>
          <button onClick={onConfirm} className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
