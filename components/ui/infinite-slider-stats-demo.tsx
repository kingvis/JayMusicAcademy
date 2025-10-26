import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Users, Star, Clock, Shield, Award, Heart, BookOpen, Trophy } from 'lucide-react';

export function InfiniteSliderStatsDemo() {
  const extendedStats = [
    { value: '1000+', label: 'Students', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Instructors', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { value: '4.9/5', label: 'Rating', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { value: '24/7', label: 'Support', icon: Shield, color: 'from-green-500 to-emerald-500' },
    { value: '95%', label: 'Success Rate', icon: Trophy, color: 'from-indigo-500 to-purple-500' },
    { value: '500+', label: 'Graduates', icon: Award, color: 'from-pink-500 to-rose-500' },
    { value: '10+', label: 'Years Experience', icon: Clock, color: 'from-teal-500 to-blue-500' },
    { value: '100%', label: 'Satisfaction', icon: Heart, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            JayMusicAcademy <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Stats</span>
          </h1>
          <p className="text-gray-400 text-lg">Experience our achievements in motion</p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {extendedStats.slice(0, 4).map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Infinite Slider */}
        <div className="relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
            </h3>
            <p className="text-gray-400">Continuous excellence in music education</p>
          </div>
          
          <InfiniteSlider
            gap={32}
            duration={30}
            durationOnHover={80}
            className="py-8"
          >
            {extendedStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={`${stat.label}-${index}`}
                  className="flex flex-col items-center justify-center min-w-[240px] p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-600/50 transition-all duration-300 group hover:bg-gradient-to-br hover:from-gray-700/60 hover:to-gray-800/60"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </InfiniteSlider>
        </div>

        {/* Instructions */}
        <div className="mt-16 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
          <h3 className="text-xl font-semibold text-white mb-3">Interactive Features:</h3>
          <ul className="text-gray-300 space-y-2">
            <li>• <strong>Hover to Slow Down:</strong> Hover over the slider to slow down the animation</li>
            <li>• <strong>Smooth Animation:</strong> Continuous infinite scrolling with smooth transitions</li>
            <li>• <strong>Responsive Design:</strong> Adapts to all screen sizes</li>
            <li>• <strong>Enhanced Visuals:</strong> Gradient backgrounds and hover effects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}