import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Piano as PianoIcon, Star, Clock, Users, Award, Play, Download, BookOpen, Heart, Share2, Volume2, Pause } from 'lucide-react';

const Piano: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning',
      description: 'Progressive curriculum from basics to advanced techniques',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified piano teachers with years of experience',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop'
    },
    {
      icon: Play,
      title: 'Interactive Sessions',
      description: 'Live lessons with real-time feedback and guidance',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=300&fit=crop'
    },
    {
      icon: Download,
      title: 'Practice Materials',
      description: 'Access to sheet music, exercises, and practice tracks',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop'
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Piano Basics - Hand Position',
      instructor: 'Sarah Johnson',
      duration: '8:45',
      thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=225&fit=crop',
      views: '12.5K',
      likes: 234
    },
    {
      id: 2,
      title: 'Scales and Finger Exercises',
      instructor: 'Michael Chen',
      duration: '12:30',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
      views: '8.9K',
      likes: 189
    },
    {
      id: 3,
      title: 'Classical Piece Tutorial',
      instructor: 'Emma Williams',
      duration: '15:20',
      thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=225&fit=crop',
      views: '15.2K',
      likes: 312
    }
  ];

  const instructors = [
    {
      name: 'Sarah Johnson',
      specialization: 'Classical Piano',
      experience: '15 years',
      rating: 4.9,
      students: 1200,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      bio: 'Graduate of Juilliard School with 15 years of teaching experience'
    },
    {
      name: 'Michael Chen',
      specialization: 'Jazz Piano',
      experience: '12 years',
      rating: 4.8,
      students: 980,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Professional jazz pianist and composer with international recognition'
    },
    {
      name: 'Emma Williams',
      specialization: 'Contemporary Piano',
      experience: '10 years',
      rating: 4.9,
      students: 750,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      bio: 'Contemporary pianist with expertise in modern music styles'
    }
  ];

  const levels = [
    {
      name: 'Beginner',
      duration: '3-6 months',
      description: 'Learn basic notes, chords, and simple songs',
      price: '$99/month'
    },
    {
      name: 'Intermediate',
      duration: '6-12 months',
      description: 'Advanced techniques, music theory, and complex pieces',
      price: '$149/month'
    },
    {
      name: 'Advanced',
      duration: '12+ months',
      description: 'Master-level performance and composition skills',
      price: '$199/month'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mb-8">
              <PianoIcon className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Master the <span className="gradient-text">Piano</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From classical to contemporary, discover the beauty of piano playing with our expert instructors and personalized learning approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 glow"
              >
                Start Learning Piano
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Book Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="gradient-text">Piano Program</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive learning experience designed for all skill levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your <span className="gradient-text">Learning Level</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Structured progression from beginner to advanced pianist
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 card-3d"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                    <div className="text-purple-400 font-semibold">{level.price}</div>
                    <div className="text-gray-400 text-sm mt-1">{level.duration}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-center">{level.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Choose {level.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Video Tutorials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn from our best instructors with high-quality video lessons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 text-gray-800" />
                        ) : (
                          <Play className="w-6 h-6 text-gray-800 ml-1" />
                        )}
                      </motion.button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">by {video.instructor}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{video.views}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{video.likes}</span>
                        </span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsLiked(!isLiked)}
                        className={`p-2 rounded-full transition-colors ${
                          isLiked ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our <span className="gradient-text">Expert Instructors</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn from world-class piano teachers with years of experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 p-8">
                  <div className="relative mb-6">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500/30 group-hover:border-purple-500/60 transition-colors"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {instructor.specialization}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{instructor.name}</h3>
                  <p className="text-gray-400 mb-4">{instructor.bio}</p>
                  
                  <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{instructor.rating}</span>
                    </div>
                    <div className="text-gray-400">•</div>
                    <div className="text-gray-400">{instructor.experience}</div>
                    <div className="text-gray-400">•</div>
                    <div className="text-gray-400">{instructor.students} students</div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  >
                    Book Lesson
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Piano Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Expert Instructors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="gradient-text">Piano Journey?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of students who have discovered their passion for piano
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg text-xl font-semibold hover:shadow-2xl transition-all duration-300 glow"
            >
              Start Learning Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Piano;
