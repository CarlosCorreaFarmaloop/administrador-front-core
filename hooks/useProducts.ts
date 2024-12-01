'use client';

import { useQuery } from '@tanstack/react-query';
import { IProducto } from '@/types/product';

// Simulated API call - replace with actual API endpoint
const fetchProducts = async (): Promise<IProducto[]> => {
  // Simulated data
  return [
    {
      id: '1',
      active: true,
      audit: [],
      currentStatus: 'active',
      properties: {
        brand: 'GeneriMed',
        bsale: false,
        category: 'Analgésicos',
        concentration: '500mg',
        ean: '7501234567890',
        efficiencyPeriod: '24 meses',
        generalIndications: 'Dolor y fiebre',
        isBioequivalent: true,
        isMinimumRequest: false,
        isp: 'ISP-123',
        isPharmaceutical: true,
        isRefrigerated: false,
        laboratory: 'Laboratorio A',
        name: 'Paracetamol 500mg',
        pharmaceuticalForm: 'Tableta',
        photography: 'https://placehold.co/100x100',
        pregnancyOrLactancy: 'Consultar médico',
        prescription: 'Venta libre',
        presentation: 'Caja x 20 tabletas',
        quantityPerPresentation: 20,
        referencePrice: 5000,
        shortName: 'Paracetamol',
        sku: 'MED-001',
        storageCondition: 'Temperatura ambiente',
        subCategory: 'Dolor',
        tags: ['analgésico', 'fiebre'],
        therapeuticAction: 'Analgésico y antipirético',
        temporaryCategories: [],
        composicion: [
          {
            principio_activo: 'Paracetamol',
            concentracion: '500',
            unidad_de_medida: 'mg'
          }
        ],
        priority: 1,
        activePrinciple: 'Paracetamol'
      },
      status: []
    },
    // Add more mock data as needed
  ];
};

export function useProducts() {
  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return {
    products,
    isLoading,
    error,
  };
}