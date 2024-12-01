'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const formSchema = z.object({
  active: z.boolean(),
  isBioequivalent: z.boolean(),
  isMinimumRequest: z.boolean(),
  isPharmaceutical: z.boolean(),
  isRefrigerated: z.boolean(),
  isBsale: z.boolean(),
  isMenu: z.boolean(),
  storageCondition: z.string(),
  description: z.string(),
  pregnancyOrLactancy: z.string(),
});

type FormData = z.infer<typeof formSchema>;

interface ProductStorageFormProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

export function ProductStorageForm({ onSubmit, onBack }: ProductStorageFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      active: true,
      isBioequivalent: false,
      isMinimumRequest: false,
      isPharmaceutical: false,
      isRefrigerated: false,
      isBsale: false,
      isMenu: false,
      storageCondition: '',
      description: '',
      pregnancyOrLactancy: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="active"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Activo</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isBioequivalent"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Bioequivalente</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isMinimumRequest"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Petitorio mínimo</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isPharmaceutical"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Farmacéutico</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isRefrigerated"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Refrigerado</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isMenu"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Menu</FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isBsale"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>BSale</FormLabel>
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="storageCondition"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condición de almacenado</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pregnancyOrLactancy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Indicaciones de embarazo y lactancia</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Volver
          </Button>
          <Button type="submit">Finalizar</Button>
        </div>
      </form>
    </Form>
  );
}