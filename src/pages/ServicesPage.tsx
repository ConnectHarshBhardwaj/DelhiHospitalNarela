import { PageHeader } from '../components/PageHeader';
import { Services } from '../components/Services';

export const ServicesPage = () => {
  return (
    <main>
      <PageHeader 
        title="Our Medical Services" 
        subtitle="Comprehensive maternity and gynecology care tailored to your needs."
      />
      <Services />
    </main>
  );
};
