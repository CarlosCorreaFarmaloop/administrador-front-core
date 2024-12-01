'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import { ProductFilters } from './ProductFilters';
import { ProductTable } from './ProductTable';
import { IProducto } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function ProductList() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isLoading, error } = useProducts();
  const productsPerPage = 10;

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.properties.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.properties.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || 
      (statusFilter === 'active' && product.active) ||
      (statusFilter === 'inactive' && !product.active);
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleEdit = (product: IProducto) => {
    console.log('Edit product:', product);
  };

  const handleDelete = (product: IProducto) => {
    console.log('Delete product:', product);
  };

  const handleCreate = () => {
    router.push('/productos/crear');
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los productos</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <ProductFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
        />
        <Button onClick={handleCreate}>
          <Icons.plus className="mr-2 h-4 w-4" />
          Crear Producto
        </Button>
      </div>
      <ProductTable
        products={paginatedProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}