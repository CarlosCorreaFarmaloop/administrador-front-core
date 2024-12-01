'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Icons } from '@/components/ui/icons';
import { TagInput } from '@/components/ui/tag-input';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  photography: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `El tamaño máximo es 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Solo se aceptan .jpg, .jpeg, .png y .webp"
    ),
  name: z.string().min(1, 'El nombre es requerido'),
  shortName: z.string().min(1, 'El nombre corto es requerido'),
  sku: z.string().min(1, 'El SKU es requerido'),
  keywords: z.array(z.string()),
  tags: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

interface ProductGeneralFormProps {
  onSubmit: (data: FormData) => void;
}

export function ProductGeneralForm({ onSubmit }: ProductGeneralFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      shortName: '',
      sku: '',
      prescription: '',
      keywords: [],
      tags: [],
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    if (e.target.files?.[0]) {
      field.onChange(e.target.files[0]);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="photography"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen del producto*</FormLabel>
              <FormControl>
                <div 
                  className="w-full h-48 border-2 border-dashed rounded-lg flex items-center justify-center relative cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => document.getElementById('image-upload')?.click()}
                >
                  {field.value ? (
                    <img
                      src={URL.createObjectURL(field.value)}
                      alt="Preview"
                      className="w-full h-full object-contain rounded-lg p-2"
                    />
                  ) : (
                    <div className="text-center">
                      <Icons.image className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click para subir imagen
                      </p>
                    </div>
                  )}
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, field)}
                    className="hidden"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="shortName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre corto*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SKU*</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="keywords"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Palabras clave para búsqueda</FormLabel>
              <FormControl>
                <TagInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Escriba y presione Enter para agregar"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <TagInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Escriba y presione Enter para agregar"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button type="submit">Continuar</Button>
        </div>
      </form>
    </Form>
  );
}