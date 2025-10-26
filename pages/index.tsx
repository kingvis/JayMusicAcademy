import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GlareCard } from '@/components/ui/glare-card';
import { Keyboard, Mic, Drumstick, Music, Zap, Wind, Volume2 } from 'lucide-react';

const Home: React.FC = () => {
  const { data: session, status } = useSession();
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
    { value: '1000+', label: 'Students' },
    { value: '50+', label: 'Instructors' },
    { value: '4.9/5', label: 'Rating' },
    { value: '24/7', label: 'Support' },
  ];

  useEffect(() => {
    // Show form modal for new users who haven't completed the form
    if (session && !completedForm && status === 'authenticated') {
      setShowFormModal(true);
    }
  }, [session, completedForm, status]);

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
              <Link href="/auth/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 glow"
                >
                  Start Learning Today
                </motion.button>
              </Link>
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

      {/* Stats Section */}
      <section className="py-20 bg-black/40 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-xl font-semibold hover:shadow-2xl transition-all duration-300 glow"
              >
                Get Started Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simple Modal for now */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Welcome to JayMusicAcademy!</h2>
            <p className="text-gray-600 mb-6">Help us personalize your learning experience.</p>
            <button
              onClick={() => {
                setShowFormModal(false);
                setCompletedForm(true);
              }}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
