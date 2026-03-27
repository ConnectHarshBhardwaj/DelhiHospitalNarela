import { PageHeader } from '../components/PageHeader';
import { Gallery } from '../components/Gallery';

export const GalleryPage = () => {
  return (
    <main>
      <PageHeader 
        title="Hospital Gallery" 
        subtitle="Take a visual tour of our state-of-the-art facilities and care environment."
      />
      <Gallery />
    </main>
  );
};
