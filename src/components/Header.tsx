import React, { useState } from 'react';
import { Bell, Settings, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const notifications = [
    { id: 1, message: 'New user registered', time: '5m ago' },
    { id: 2, message: 'Role permissions updated', time: '1h ago' },
    { id: 3, message: 'System update completed', time: '2h ago' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-border px-4 sm:px-6 py-4 sticky top-0 z-20 shadow-sm"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-4 lg:ml-0 ml-12" // Added margin-left for mobile
        >
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome back, Mayank
          </h2>
        </motion.div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center max-w-md flex-1 mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-2 sm:space-x-4"
        >
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-accent rounded-full transition-colors relative"
            >
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-border py-2 z-50"
                >
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer"
                    >
                      <p className="text-sm font-medium text-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings */}
          <div className="relative">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-accent rounded-full transition-colors"
            >
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </button>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-2 z-50"
                >
                  {['Profile', 'Preferences', 'Help', 'Logout'].map((item) => (
                    <button
                      key={item}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-accent/50 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Avatar */}
          <div className="flex items-center">
            <motion.span 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-2xl cursor-pointer hover:animate-pulse"
            >
              👨‍💻
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;