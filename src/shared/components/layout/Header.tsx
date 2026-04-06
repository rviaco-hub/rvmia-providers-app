export default function Header({
  toggle,
}: {
  toggle: () => void;
}) {
  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4">
      <button onClick={toggle} className="text-xl">
        ☰
      </button>

      <div className="font-semibold">Panel Proveedor</div>

      <div>👤</div>
    </header>
  );
}