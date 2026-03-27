import { PageHeader } from '../components/PageHeader';
import { Contact } from '../components/Contact';

export const ContactPage = () => {
  return (
    <main>
      <PageHeader 
        title="Contact Us" 
        subtitle="We are here for you 24/7. Reach out to us for appointments or emergencies."
      />
      <Contact />
    </main>
  );
};
