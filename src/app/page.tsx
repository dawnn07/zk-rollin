import Explore from "@/components/explore";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Explore />
      <Footer />
    </main>
  );
}
