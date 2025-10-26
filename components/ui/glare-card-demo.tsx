import { GlareCard } from "@/components/ui/glare-card";
import { Keyboard, Mic, Drumstick, Music, Wind, Volume2 } from 'lucide-react';

export function GlareCardDemo() {
  const instruments = [
    { 
      name: 'Keyboards', 
      color: 'from-blue-500 to-cyan-500',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
      description: 'Master digital keyboards and synthesizers with cutting-edge techniques'
    },
    { 
      name: 'Piano', 
      color: 'from-purple-500 to-pink-500',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop',
      description: 'Learn classical and contemporary piano from expert instructors'
    },
    { 
      name: 'Vocals', 
      color: 'from-green-500 to-emerald-500',
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop',
      description: 'Develop your voice with professional vocal training techniques'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8 bg-slate-900 min-h-screen">
      {instruments.map((instrument, index) => {
        const IconComponent = instrument.icon;
        return (
          <div key={instrument.name} className="group">
            <GlareCard className="flex flex-col items-center justify-center relative overflow-hidden">
              {/* Background Image */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                src={instrument.image}
                alt={instrument.name}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${instrument.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${instrument.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {instrument.name}
                </h3>
                
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                  {instrument.description}
                </p>
              </div>
            </GlareCard>
          </div>
        );
      })}
    </div>
  );
}