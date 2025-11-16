import { Header } from '@/components/Header';
import { VoiceInterface } from '@/components/VoiceInterface';
import { CommandHistory } from '@/components/CommandHistory';
import { FeatureCards } from '@/components/FeatureCards';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section - Voice Interface */}
        <section className="py-12">
          <VoiceInterface />
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Command History - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <CommandHistory />
          </div>

          {/* Status/Info Card */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Connection</span>
                  <span className="text-sm font-medium text-primary">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-sm font-medium text-foreground">~200ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Commands Today</span>
                  <span className="text-sm font-medium text-foreground">24</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-gradient-primary">
              <h3 className="font-semibold text-lg mb-2 text-primary-foreground">
                Quick Tip
              </h3>
              <p className="text-sm text-primary-foreground/90">
                Try saying "What can you do?" to see all available commands and features.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-8">
          <FeatureCards />
        </section>
      </main>
    </div>
  );
};

export default Index;
