import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music,
  Users,
  Volume2,
  Menu,
  X,
  User,
  LogOut,
  Phone,
  Mail,
  Bell,
  Settings,
  BookOpen,
  Trophy,
  Calendar,
  Heart,
} from 'lucide-react';
import ThemeToggle from './ui/theme-toggle';

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Keyboards', href: '/keyboards', emoji: '🎹' },
    { name: 'Piano', href: '/piano', emoji: '🎹' },
    { name: 'Vocals', href: '/vocals', emoji: '🎤' },
    { name: 'Drums', href: '/drums', emoji: '🥁' },
    { name: 'Bharatnatyam', href: '/bharatnatyam', emoji: '💃' },
    { name: 'Flute', href: '/flute', emoji: '🎵' },
    { name: 'Trumpet', href: '/trumpet', emoji: '🎺' },
  ];

  const userMenuItems = [
    { name: 'My Profile', href: '/profile', icon: User },
    { name: 'My Courses', href: '/courses', icon: BookOpen },
    { name: 'Achievements', href: '/achievements', icon: Trophy },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Favorites', href: '/favorites', icon: Heart },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@jaymusicacademy.com', href: 'mailto:info@jaymusicacademy.com' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <Music className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">
              JayMusicAcademy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">{item.emoji}</span>
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Contact & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {/* Contact Info */}
            <div className="flex items-center space-x-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Authentication */}
            {status === 'loading' ? (
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            ) : session ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </motion.button>

                {/* User Menu */}
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {session.user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-700">
                        {session.user?.name || 'User'}
                      </div>
                      <div className="text-xs text-gray-500">Student</div>
                    </div>
                  </motion.button>

                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                      >
                        <div className="px-4 py-3 border-b border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold">
                                {session.user?.name?.charAt(0) || 'U'}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {session.user?.name || 'User'}
                              </div>
                              <div className="text-sm text-gray-500">
                                {session.user?.email}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-2">
                          {userMenuItems.map((item, index) => (
                            <Link key={item.name} href={item.href}>
                              <motion.div
                                whileHover={{ backgroundColor: '#f3f4f6' }}
                                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                              >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.name}</span>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="border-t border-gray-100 py-2">
                          <motion.button
                            whileHover={{ backgroundColor: '#fef2f2' }}
                            onClick={() => {
                              signOut();
                              setShowUserMenu(false);
                            }}
                            className="flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                          >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm">Sign Out</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <ThemeToggle />
                <Link href="/auth">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 glow"
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link href="/auth/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    Create Account
                  </motion.button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass backdrop-blur-md border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Navigation Items */}
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navigationItems.length + index) * 0.1 }}
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-2"
                  >
                    <contact.icon className="w-5 h-5" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-gray-200">
                {session ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{session.user?.name}</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </motion.button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link href="/auth">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        Sign In
                      </motion.button>
                    </Link>
                    <Link href="/auth/signup">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full px-4 py-2 border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                      >
                        Create Account
                      </motion.button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
