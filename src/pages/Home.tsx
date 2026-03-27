import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};
