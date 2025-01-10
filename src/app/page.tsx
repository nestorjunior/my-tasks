import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="flex items-center justify-between h-28">
        <Header />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
