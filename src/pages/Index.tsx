import { Header } from '@/components/Header';
import { VoiceInterface } from '@/components/VoiceInterface';
import { CommandHistory } from '@/components/CommandHistory';
import { FeatureCards } from '@/components/FeatureCards';

const Index = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'hsl(220 25% 10%)',
      color: 'white'
    }}>
      <Header />
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '20px' 
      }}>
        <VoiceInterface />
        <div style={{ marginTop: '40px' }}>
          <CommandHistory />
        </div>
        <FeatureCards />
      </div>
    </div>
  );
};

export default Index;
