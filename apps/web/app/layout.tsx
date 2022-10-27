import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import { Search } from "./Search";
import { CheckBox } from "./Checkbox";

const robotoNormal = Roboto({ weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={robotoNormal.className}>
      <head></head>
      <body className="grid min-h-screen grid-cols-5 grid-rows-[5rem_auto] bg-white text-slate-800 dark:bg-slate-800 dark:text-white">
        <header className="col-span-5 row-span-1 flex items-center border-b-2 border-solid">
          <h1 className="p-2 text-xl">🏷️ GCC Release Dashboard</h1>
        </header>
        <aside className="col-span-1 row-span-2 space-y-4 border-r-2 border-solid p-4">
          <Search />
          <CheckBox name="alpha" label="Include alpha releases?" />
        </aside>
        <main className="col-span-4 col-start-2 row-span-2 p-2">
          {children}
        </main>
      </body>
    </html>
  );
}
