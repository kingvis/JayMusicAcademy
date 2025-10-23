import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AuroraBackground } from '@/components/ui/aurora-background';

const Home: React.FC = () => {
  const { data: session, status } = useSession();
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [completedForm, setCompletedForm] = React.useState(false);

  const instruments = [
    { name: 'Keyboards', href: '/keyboards', color: 'from-blue-500 to-cyan-500' },
    { name: 'Piano', href: '/piano', color: 'from-purple-500 to-pink-500' },
    { name: 'Vocals', href: '/vocals', color: 'from-green-500 to-emerald-500' },
    { name: 'Drums', href: '/drums', color: 'from-orange-500 to-red-500' },
    { name: 'Bharatnatyam', href: '/bharatnatyam', color: 'from-indigo-500 to-purple-500' },
    { name: 'Flute', href: '/flute', color: 'from-teal-500 to-blue-500' },
    { name: 'Trumpet', href: '/trumpet', color: 'from-yellow-500 to-orange-500' },
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
      {/* Hero Section with Aurora Background */}
      <AuroraBackground>
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section className="py-20 bg-black/20 backdrop-blur-sm">
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
      <section id="instruments" className="py-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instruments.map((instrument, index) => (
              <motion.div
                key={instrument.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={instrument.href}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 card-3d">
                    <div className={`absolute inset-0 bg-gradient-to-br ${instrument.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative p-8 text-center">
                      <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${instrument.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-4xl">🎹</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {instrument.name}
                      </h3>
                      
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Master the art of {instrument.name.toLowerCase()} with our expert instructors
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
