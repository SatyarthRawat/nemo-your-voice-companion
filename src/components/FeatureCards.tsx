import {
  MessageSquare,
  Music,
  Mail,
  Cloud,
  Search,
  Calendar,
  Navigation,
  Phone,
  Video,
  Settings,
  Globe,
  Share2,
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  { icon: MessageSquare, title: 'AI Chat', description: 'Natural conversations' },
  { icon: Music, title: 'Media Control', description: 'Play music & videos' },
  { icon: Mail, title: 'Email', description: 'Send & manage emails' },
  { icon: Cloud, title: 'Weather', description: 'Real-time forecasts' },
  { icon: Search, title: 'Web Search', description: 'Google & YouTube' },
  { icon: Calendar, title: 'Scheduling', description: 'Manage appointments' },
  { icon: Navigation, title: 'Navigation', description: 'Get directions' },
  { icon: Phone, title: 'Contacts', description: 'Manage contacts' },
  { icon: Video, title: 'Browser', description: 'Control browser' },
  { icon: Settings, title: 'Apps', description: 'Open & close apps' },
  { icon: Globe, title: 'Websites', description: 'Visit any site' },
  { icon: Share2, title: 'WhatsApp', description: 'Send messages' },
];

export const FeatureCards = () => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4 text-foreground">
        Voice Commands
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-3 border-border bg-card hover:bg-card/80 transition-colors"
          >
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-sm text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
