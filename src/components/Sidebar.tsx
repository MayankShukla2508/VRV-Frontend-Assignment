import React, { useState } from 'react';
import { Users, Shield, Layout, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: Layout, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Shield, label: 'Roles', path: '/roles' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-5 left-4 z-50 p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ type: "spring", bounce: 0.25 }}
            className={clsx(
              "fixed lg:static inset-y-0 left-0 z-40",
              "bg-white border-r border-border w-64 min-h-screen p-6 shadow-lg"
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex items-center justify-between"
            >
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                RBAC Dashboard
              </h1>
            </motion.div>

            <nav className="space-y-2">
              {menuItems.map(({ icon: Icon, label, path }, index) => (
                <motion.div
                  key={path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      'flex items-center space-x-3 p-3 rounded-lg transition-all duration-200',
                      location.pathname === path
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;