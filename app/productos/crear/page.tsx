'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductGeneralForm } from '@/components/products/forms/ProductGeneralForm';
import { ProductPresentationForm } from '@/components/products/forms/ProductPresentationForm';
import { ProductStorageForm } from '@/components/products/forms/ProductStorageForm';

export default function CreateProductPage() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('general');
  const [formData, setFormData] = useState({
    general: {},
    presentation: {},
    storage: {}
  });

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Crear Producto</h1>
          <p className="text-muted-foreground">
            Complete la información del producto
          </p>
        </div>
        <Button variant="outline" onClick={handleBack}>
          Volver
        </Button>
      </div>

      <Tabs value={currentTab} onValueChange={handleTabChange} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="presentation">Presentación</TabsTrigger>
          <TabsTrigger value="storage">Almacenamiento</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <ProductGeneralForm
            onSubmit={(data) => {
              setFormData(prev => ({ ...prev, general: data }));
              setCurrentTab('presentation');
            }}
          />
        </TabsContent>

        <TabsContent value="presentation">
          <ProductPresentationForm
            onSubmit={(data) => {
              setFormData(prev => ({ ...prev, presentation: data }));
              setCurrentTab('storage');
            }}
            onBack={() => setCurrentTab('general')}
          />
        </TabsContent>

        <TabsContent value="storage">
          <ProductStorageForm
            onSubmit={(data) => {
              setFormData(prev => ({ ...prev, storage: data }));
              // Handle final form submission
              console.log('Final form data:', { ...formData, storage: data });
            }}
            onBack={() => setCurrentTab('presentation')}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}