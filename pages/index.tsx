import React, { useEffect, useState } from 'react';
import { useUser, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GlareCard } from '@/components/ui/glare-card';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import PersonalizationFormModal from '@/components/PersonalizationFormModal';
import { Keyboard, Mic, Drumstick, Music, Zap, Wind, Volume2, Users, Star, Clock, Shield, Award, Heart, Headphones, BookOpen, Trophy, Target, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const { isSignedIn, user } = useUser();
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [completedForm, setCompletedForm] = React.useState(false);

  const instruments = [
    { 
      name: 'Keyboards', 
      href: '/keyboards', 
      color: 'from-blue-500 to-cyan-500',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
      description: 'Master digital keyboards and synthesizers with cutting-edge techniques'
    },
    { 
      name: 'Piano', 
      href: '/piano', 
      color: 'from-purple-500 to-pink-500',
      icon: Keyboard,
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop',
      description: 'Learn classical and contemporary piano from expert instructors'
    },
    { 
      name: 'Vocals', 
      href: '/vocals', 
      color: 'from-green-500 to-emerald-500',
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop',
      description: 'Develop your voice with professional vocal training techniques'
    },
    { 
      name: 'Drums', 
      href: '/drums', 
      color: 'from-orange-500 to-red-500',
      icon: Drumstick,
      image: 'https://images.unsplash.com/photo-1571327073757-71d13c24de30?q=80&w=1000&auto=format&fit=crop',
      description: 'Master rhythm and percussion with dynamic drum lessons'
    },
    { 
      name: 'Bharatnatyam', 
      href: '/bharatnatyam', 
      color: 'from-indigo-500 to-purple-500',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1594736797933-d0ac20a9f1a4?q=80&w=1000&auto=format&fit=crop',
      description: 'Learn the classical Indian dance form with traditional techniques'
    },
    { 
      name: 'Flute', 
      href: '/flute', 
      color: 'from-teal-500 to-blue-500',
      icon: Wind,
      image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=1000&auto=format&fit=crop',
      description: 'Discover the melodic beauty of woodwind instruments'
    },
    { 
      name: 'Trumpet', 
      href: '/trumpet', 
      color: 'from-yellow-500 to-orange-500',
      icon: Volume2,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1000&auto=format&fit=crop',
      description: 'Learn brass instruments with professional techniques and theory'
    },
  ];

  const stats = [
    { value: '1000+', label: 'Students', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Instructors', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { value: '4.9/5', label: 'Rating', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { value: '24/7', label: 'Support', icon: Shield, color: 'from-green-500 to-emerald-500' },
  ];

  // Extended stats for infinite slider
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

  useEffect(() => {
    // Show form modal for new users who haven't completed the form
    if (isSignedIn && !completedForm) {
      setShowFormModal(true);
    }
  }, [isSignedIn, completedForm]);

  return (
    <div className="relative">
      {/* Hero Section with Aurora */}
      <AuroraBackground className="dark:bg-neutral-900">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
              <span className="gradient-text">JayMusicAcademy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover your musical journey with world-class instructors and personalized learning experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<SignedIn>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFormModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 glow"
                >
                  Start Learning Today
                </motion.button>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 glow"
                  >
                    Start Learning Today
                  </motion.button>
                </SignInButton>
              </SignedOut>
              <Link href="#instruments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-black/30 dark:border-white/30 text-black dark:text-white rounded-lg text-lg font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
                >
                  Explore Instruments
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Achievements Section */}
      <section className="py-20 bg-black/40 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Infinite Slider with Extended Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Our <span className="gradient-text">Achievements</span>
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
          </motion.div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Instrument</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From classical to contemporary, find your perfect musical expression
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {instruments.map((instrument, index) => {
              const IconComponent = instrument.icon;
              return (
                <motion.div
                  key={instrument.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={instrument.href}>
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
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="gradient-text">Musical Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who have discovered their passion for music
            </p>
            <SignedIn>
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-xl font-semibold hover:shadow-2xl transition-all duration-300 glow"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-xl font-semibold hover:shadow-2xl transition-all duration-300 glow"
                >
                  Get Started Now
                </motion.button>
              </SignInButton>
            </SignedOut>
          </motion.div>
        </div>
      </section>

<PersonalizationFormModal
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
        userId={user?.id || ''}
        defaultName={(user?.fullName || `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim()) || null}
        defaultEmail={user?.primaryEmailAddress?.emailAddress ?? null}
        onSubmitted={() => setCompletedForm(true)}
      />
    </div>
  );
};

export default Home;
