import { PageHeader } from '../components/PageHeader';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';

export const AboutPage = () => {
  return (
    <main>
      <PageHeader 
        title="About Dr. Sachin" 
        subtitle="Learn more about our mission, vision, and the expert care we provide."
      />
      <About />
      <WhyChooseUs />
    </main>
  );
};
