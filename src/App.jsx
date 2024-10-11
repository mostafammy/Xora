import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/hero";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
        <Download />
        <Footer />
      </main>
    </>
  );
}

export default App;
