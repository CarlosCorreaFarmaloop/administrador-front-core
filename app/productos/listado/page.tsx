import { ProductList } from '@/components/products/ProductList';

export default function ProductListPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Listado de Productos</h1>
        <p className="text-muted-foreground">
          Gestiona y visualiza todos los productos
        </p>
      </div>
      <ProductList />
    </div>
  );
}