import { Bot, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-primary">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              NEMO
            </h1>
            <p className="text-xs text-muted-foreground">
              Naturally Evolving Model
            </p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
