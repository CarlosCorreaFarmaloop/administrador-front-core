export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Farmaloop</h1>
      <p className="text-lg text-muted-foreground">
        Seleccione una opción del menú para comenzar
      </p>
    </div>
  );
}