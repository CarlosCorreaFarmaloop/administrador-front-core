import { IProducto } from '@/types/product';

// Mock data for products
const mockProducts: IProducto[] = [
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
  }
];

export const productApi = {
  getProducts: async (): Promise<IProducto[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockProducts;
  },

  getProduct: async (id: string): Promise<IProducto | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockProducts.find(p => p.id === id);
  },

  createProduct: async (product: Omit<IProducto, 'id'>): Promise<IProducto> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newProduct = {
      ...product,
      id: Math.random().toString(36).substr(2, 9)
    };
    mockProducts.push(newProduct);
    return newProduct;
  },

  updateProduct: async (id: string, product: Partial<IProducto>): Promise<IProducto> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    mockProducts[index] = { ...mockProducts[index], ...product };
    return mockProducts[index];
  },

  deleteProduct: async (id: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    mockProducts.splice(index, 1);
  }
};