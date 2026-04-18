import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Benefits from '@/components/landing/benefits';
import Footer from '@/components/landing/footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Features />
      <Benefits />
      <Footer />
    </main>
  );
}
