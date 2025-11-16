import { Header } from '@/components/Header';
import { VoiceInterface } from '@/components/VoiceInterface';
import { CommandHistory } from '@/components/CommandHistory';
import { FeatureCards } from '@/components/FeatureCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="py-8">
          <VoiceInterface />
        </section>

        <section>
          <CommandHistory />
        </section>

        <section>
          <FeatureCards />
        </section>
      </main>
    </div>
  );
};

export default Index;
