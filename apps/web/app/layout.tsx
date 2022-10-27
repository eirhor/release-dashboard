import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="grid min-h-screen grid-cols-5 grid-rows-[5rem_auto]">
        <header className="col-span-5 row-span-1 flex items-center border-b-2 border-solid">
          <h1 className="p-2 text-xl">🏷️ GCC Release Dashboard</h1>
        </header>
        <aside className="col-span-1 row-span-2 border-r-2 border-solid p-2">
          Sidebar
        </aside>
        <main className="col-span-4 col-start-2 row-span-2 p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
