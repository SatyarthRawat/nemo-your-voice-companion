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
    <div className="flex flex-col items-center justify-center space-y-6">
      <Button
        onClick={handleMicClick}
        size="lg"
        className={`h-24 w-24 rounded-full transition-colors ${
          isActive
            ? 'bg-primary hover:bg-primary/90'
            : 'bg-secondary hover:bg-secondary/80'
        }`}
      >
        {isActive ? (
          <Mic className="h-10 w-10 text-primary-foreground" />
        ) : (
          <MicOff className="h-10 w-10 text-foreground" />
        )}
      </Button>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-foreground">
          {getStatusText()}
        </h2>
        <p className="text-muted-foreground text-sm mt-2">
          {isActive ? 'Listening to your command' : 'Click the microphone to start'}
        </p>
      </div>
    </div>
  );
};
