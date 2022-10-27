import "../styles/globals.css";
import { Roboto } from "@next/font/google";

const robotoNormal = Roboto({ weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={robotoNormal.className}>
      <head></head>
      <body className="min-h-screen grid grid-rows-[5rem_auto] grid-cols-5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
        <header className="border-solid border-b-2 row-span-1 col-span-5 flex items-center">
          <h1 className="text-xl p-2">🏷️ GCC Release Dashboard</h1>
        </header>
        <aside className="row-span-2 col-span-1 p-2 border-solid border-r-2">
          Sidebar
        </aside>
        <main className="row-span-2 col-start-2 col-span-4 p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
