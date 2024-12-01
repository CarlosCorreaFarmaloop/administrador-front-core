'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Icons } from '@/components/ui/icons';

const formSchema = z.object({
  prescription: z.string().min(1, 'La receta médica es requerida'),
});

type FormData = z.infer<typeof formSchema>;

interface ProductPresentationFormProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

export function ProductPresentationForm({ onSubmit, onBack }: ProductPresentationFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prescription: '',
      therapeuticAction: '',
      pharmaceuticalForm: '',
      presentation: '',
      quantityPerPresentation: '',
      efficiencyPeriod: '',
      isp: '',
      ean: '',
      activePrinciples: [{ principle: '', concentration: '', unit: '' }],
    },
  });

  const activePrinciples = form.watch('activePrinciples');

  const addActivePrinciple = () => {
    form.setValue('activePrinciples', [
      ...activePrinciples,
      { principle: '', concentration: '', unit: '' },
    ]);
  };

  const removeActivePrinciple = (index: number) => {
    const newPrinciples = activePrinciples.filter((_, i) => i !== index);
    form.setValue('activePrinciples', newPrinciples);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="prescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Receta médica</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione tipo de receta" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="presentacion">Presentación receta médica</SelectItem>
                    <SelectItem value="venta_directa">Venta directa (Sin receta)</SelectItem>
                    <SelectItem value="cheque">Venta bajo receta cheque</SelectItem>
                    <SelectItem value="retenida">Receta médica retenida</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="therapeuticAction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Acción terapéutica</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="pharmaceuticalForm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Forma farmacéutica</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="presentation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Presentación</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantityPerPresentation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad por presentación</FormLabel>
                <FormControl>
                  <Input {...field} type="number" min="0" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="efficiencyPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Periodo de eficiencia</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registro en ISP</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ean"
            render={({ field }) => (
              <FormItem>
                <FormLabel>EAN</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Principios activos</h3>
            <Button type="button" variant="outline" size="sm" onClick={addActivePrinciple}>
              <Icons.plus className="w-4 h-4 mr-2" />
              Agregar principio activo
            </Button>
          </div>

          {activePrinciples.map((_, index) => (
            <div key={index} className="flex gap-4 items-start">
              <FormField
                control={form.control}
                name={`activePrinciples.${index}.principle`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Principio activo</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione principio activo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="principio1">Principio 1</SelectItem>
                        <SelectItem value="principio2">Principio 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`activePrinciples.${index}.concentration`}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Concentración</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name={`activePrinciples.${index}.unit`}
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormLabel>Medida</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Unidad" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mg">mg</SelectItem>
                        <SelectItem value="ml">ml</SelectItem>
                        <SelectItem value="g">g</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="mt-8"
                  onClick={() => removeActivePrinciple(index)}
                >
                  <Icons.trash className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Volver
          </Button>
          <Button type="submit">Continuar</Button>
        </div>
      </form>
    </Form>
  );
}