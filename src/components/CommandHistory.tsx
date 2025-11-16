import { Clock, User, Bot } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const CommandHistory = () => {
  // Sample data - would come from state management
  const messages: Message[] = [
    {
      id: 1,
      type: 'user',
      text: 'What\'s the weather today?',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      type: 'assistant',
      text: 'The weather today is sunny with a high of 75°F and clear skies.',
      timestamp: '10:30 AM',
    },
    {
      id: 3,
      type: 'user',
      text: 'Play my favorite playlist',
      timestamp: '10:32 AM',
    },
    {
      id: 4,
      type: 'assistant',
      text: 'Playing your "Favorites" playlist on Spotify.',
      timestamp: '10:32 AM',
    },
  ];

  return (
    <Card className="border-border bg-card">
      <div className="p-4 border-b border-border flex items-center space-x-2">
        <Clock className="h-4 w-4 text-primary" />
        <h3 className="font-medium text-foreground">Recent Commands</h3>
      </div>
      <ScrollArea className="h-[300px] p-4">
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.type === 'assistant' && (
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="h-3 w-3 text-primary" />
                </div>
              )}
              <div
                className={`flex flex-col space-y-1 max-w-[75%] ${
                  message.type === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`rounded-lg px-3 py-2 ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {message.timestamp}
                </span>
              </div>
              {message.type === 'user' && (
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary flex items-center justify-center">
                  <User className="h-3 w-3 text-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
