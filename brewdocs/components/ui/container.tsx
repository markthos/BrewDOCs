export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between leading-relaxed p-24 bg-orange-300/40">
      {children}
    </main>
  );
}
