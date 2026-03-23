const Sales = () => {
  const sales = [
    { id: 'v1', date: '2026-03-16', total: 12500, method: 'Efectivo' },
    { id: 'v2', date: '2026-03-16', total: 7600, method: 'Tarjeta' },
    { id: 'v3', date: '2026-03-16', total: 5400, method: 'Transferencia' }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Ventas</h2>
      <div className="overflow-x-auto bg-white shadow-sm rounded-xl border">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">Fecha</th>
              <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wide">Total</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">Método</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className="px-4 py-2 text-sm">{sale.id}</td>
                <td className="px-4 py-2 text-sm">{sale.date}</td>
                <td className="px-4 py-2 text-sm text-right">${sale.total}</td>
                <td className="px-4 py-2 text-sm">{sale.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Sales;
