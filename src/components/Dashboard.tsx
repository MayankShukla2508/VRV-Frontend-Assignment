import React from 'react';
import { Users, Shield, Lock, TrendingUp, Activity } from 'lucide-react';
import { useRBAC } from '../context/RBACContext';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Dashboard: React.FC = () => {
  const { users, roles } = useRBAC();

  const stats = [
    {
      title: 'Total Users',
      value: users.length,
      icon: Users,
      color: 'from-blue-600 to-blue-400',
      trend: '+12%',
    },
    {
      title: 'Active Roles',
      value: roles.length,
      icon: Shield,
      color: 'from-emerald-600 to-emerald-400',
      trend: '+5%',
    },
    {
      title: 'Total Permissions',
      value: roles.reduce((acc, role) => acc + role.permissions.length, 0),
      icon: Lock,
      color: 'from-violet-600 to-violet-400',
      trend: '+8%',
    },
  ];

  const recentUsers = users.slice(-5).reverse();
  const activeUsers = users.filter(user => user.isActive).length;
  const userProgress = (activeUsers / users.length) * 100;

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center space-x-1 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{stat.trend}</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <h3 className="text-3xl font-bold mt-2 text-foreground">
                  {stat.value}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Overview */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* User Activity */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">User Activity</h3>
            <Activity className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Active Users</span>
              <span className="font-medium">{activeUsers} of {users.length}</span>
            </div>
            <div className="w-full bg-accent rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${userProgress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-primary rounded-full h-2"
              />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-border shadow-sm p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentUsers.slice(0, 3).map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{user.avatar}</span>
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">Joined recently</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Just now</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Recent Users */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg border border-border shadow-sm"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Users
          </h2>
        </div>
        <div className="divide-y divide-border">
          {recentUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-accent/50 transition-colors group"
            >
              <div className="flex items-center">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl group-hover:animate-pulse"
                >
                  {user.avatar}
                </motion.span>
                <div className="ml-4">
                  <p className="font-medium text-foreground">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                  {user.role.name}
                </span>
                <span
                  className={clsx(
                    'px-2.5 py-0.5 text-xs font-medium rounded-full border',
                    user.isActive
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                      : 'bg-red-50 text-red-600 border-red-200'
                  )}
                >
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;