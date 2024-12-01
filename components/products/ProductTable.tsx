'use client';

import { IProducto } from '@/types/product';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import Image from 'next/image';

interface ProductTableProps {
  products: IProducto[];
  onEdit: (product: IProducto) => void;
  onDelete: (product: IProducto) => void;
}

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Laboratorio</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Marca</TableHead>
            <TableHead>EAN</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image
                  src={product.properties.photography || 'https://placehold.co/100x100'}
                  alt={product.properties.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </TableCell>
              <TableCell>{product.properties.sku}</TableCell>
              <TableCell>{product.properties.name}</TableCell>
              <TableCell>{product.properties.laboratory}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    product.active
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {product.active ? 'Activo' : 'Inactivo'}
                </span>
              </TableCell>
              <TableCell>{product.properties.brand}</TableCell>
              <TableCell>{product.properties.ean}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit(product)}
                  >
                    <Icons.edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(product)}
                  >
                    <Icons.trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}