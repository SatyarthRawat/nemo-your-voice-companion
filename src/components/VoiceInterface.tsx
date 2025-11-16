import { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

type VoiceStatus = 'idle' | 'listening' | 'processing' | 'speaking';

export const VoiceInterface = () => {
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [isActive, setIsActive] = useState(false);

  const handleMicClick = () => {
    if (status === 'idle') {
      setIsActive(true);
      setStatus('listening');
      // Backend integration would go here
    } else {
      setIsActive(false);
      setStatus('idle');
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'listening':
        return 'Listening...';
      case 'processing':
        return 'Processing...';
      case 'speaking':
        return 'Speaking...';
      default:
        return 'Click to speak';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        {/* Outer pulse rings */}
        {isActive && (
          <>
            <div className="absolute inset-0 -m-8 rounded-full bg-primary/20 animate-ping" />
            <div className="absolute inset-0 -m-12 rounded-full bg-primary/10 animate-pulse" />
          </>
        )}
        
        {/* Main button */}
        <Button
          onClick={handleMicClick}
          size="lg"
          className={`relative h-32 w-32 rounded-full transition-all duration-300 ${
            isActive
              ? 'bg-gradient-primary shadow-glow-accent scale-110'
              : 'bg-secondary hover:bg-secondary/80 hover:scale-105'
          }`}
        >
          {isActive ? (
            <Mic className="h-16 w-16 text-primary-foreground animate-pulse" />
          ) : (
            <MicOff className="h-16 w-16 text-foreground" />
          )}
        </Button>

        {/* Voice visualization bars */}
        {isActive && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-primary rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Status text */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
          {getStatusText()}
        </h2>
        <p className="text-muted-foreground text-sm">
          {isActive ? 'Say a command or ask a question' : 'Activate NEMO to get started'}
        </p>
      </div>
    </div>
  );
};
