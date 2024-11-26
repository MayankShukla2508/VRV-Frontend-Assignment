import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { User, Role, RBACContextType } from '../types';

const initialUsers: User[] = [
  {
    id: '1',
    name: 'Mayank Shukla',
    email: 'mshukla2508@gmail.com',
    avatar: '👨‍💻',
    role: {
      id: '1',
      name: 'Admin',
      description: 'Full system access',
      permissions: ['read', 'write', 'delete', 'manage_users', 'manage_roles'],
      createdAt: new Date().toISOString(),
    },
    isActive: true,
    createdAt: new Date().toISOString(),
  },
];

// Rest of the context remains the same
const initialRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: ['read', 'write', 'delete', 'manage_users', 'manage_roles'],
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Can edit content',
    permissions: ['read', 'write'],
    createdAt: new Date().toISOString(),
  },
];

const RBACContext = createContext<RBACContextType | null>(null);

export const RBACProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  const addUser = (user: Omit<User, 'id' | 'createdAt'>) => {
    setUsers([
      ...users,
      {
        ...user,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const updateUser = (id: string, updatedUser: Partial<User>) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...updatedUser } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addRole = (role: Omit<Role, 'id' | 'createdAt'>) => {
    setRoles([
      ...roles,
      {
        ...role,
        id: uuidv4(),
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const updateRole = (id: string, updatedRole: Partial<Role>) => {
    setRoles(roles.map(role => 
      role.id === id ? { ...role, ...updatedRole } : role
    ));
  };

  const deleteRole = (id: string) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <RBACContext.Provider value={{
      users,
      roles,
      addUser,
      updateUser,
      deleteUser,
      addRole,
      updateRole,
      deleteRole,
    }}>
      {children}
    </RBACContext.Provider>
  );
};

export const useRBAC = () => {
  const context = useContext(RBACContext);
  if (!context) {
    throw new Error('useRBAC must be used within a RBACProvider');
  }
  return context;
};