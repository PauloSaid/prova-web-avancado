import AuthProvider from "@/context/AuthContext";
import Link from "@/node_modules/next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        />
      </head>
      <body className="bg-gray-100">
        <AuthProvider>

        <header className="bg-green-500 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">App de Receitas</h1>
            <nav className="space-x-4">
            <Link href={"/#"} passHref>
                <span className="text-xl font-semibold hover:underline px-4 py-2 rounded-lg bg-white text-green-500">
                  Home Page
                </span>
              </Link>
              <Link href={"/recipes"} passHref>
                <span className="text-xl font-semibold hover:underline px-4 py-2 rounded-lg bg-white text-green-500">
                  Sobre as Receitas
                </span>
              </Link>
              <Link href={"/recipes/allrecipes"} passHref>
                <span className="text-xl font-semibold hover:underline px-4 py-2 rounded-lg bg-white text-green-500">
                  Ver Todas Receitas
                </span>
              </Link>
              <Link href={"/login"} passHref>
                <span className="text-xl font-semibold hover:underline px-4 py-2 rounded-lg bg-white text-green-500">
                  Login
                </span>
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <footer className="bg-gray-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p>Footer - Prova Paulo André Ribeiro Said</p>
          </div>
        </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
