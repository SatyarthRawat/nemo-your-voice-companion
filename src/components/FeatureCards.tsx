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
      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-accent bg-clip-text text-transparent">
        Voice Commands
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group p-4 border-border bg-card/50 backdrop-blur hover:bg-card hover:shadow-glow-primary transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground">
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
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
