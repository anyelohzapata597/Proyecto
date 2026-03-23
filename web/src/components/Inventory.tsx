const Inventory = () => {
  const products = [
    { id: 'p1', name: 'Arroz', category: 'Granos', price: 2500, stock: 20 },
    { id: 'p2', name: 'Leche', category: 'Lácteos', price: 3500, stock: 15 },
    { id: 'p3', name: 'Pan', category: 'Panadería', price: 1500, stock: 50 }
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Inventario</h2>
      <div className="overflow-x-auto bg-white shadow-sm rounded-xl border">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">ID</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">Nombre</th>
              <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide">Categoría</th>
              <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wide">Precio</th>
              <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wide">Stock</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-2 text-sm">{product.id}</td>
                <td className="px-4 py-2 text-sm">{product.name}</td>
                <td className="px-4 py-2 text-sm">{product.category}</td>
                <td className="px-4 py-2 text-sm text-right">${product.price}</td>
                <td className={`px-4 py-2 text-sm text-right ${product.stock < 10 ? 'text-red-600' : 'text-slate-700'}`}>
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Inventory;
