import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="grid grid-rows-[5rem_auto] grid-cols-5">
        <header className="row-span-1 col-span-1">
          <h1 className="text-xl p-4">GCC Release Dashboard</h1>
        </header>
        <aside className="row-span-2 col-span-1 p-2">Sidebar</aside>
        <main className="row-span-2 col-start-2 col-span-4 p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
