export type Permission = 'read' | 'write' | 'delete' | 'manage_users' | 'manage_roles';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: Role;
  isActive: boolean;
  createdAt: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt: string;
}

export interface RBACContextType {
  users: User[];
  roles: Role[];
  addUser: (user: Omit<User, 'id' | 'createdAt'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Omit<Role, 'id' | 'createdAt'>) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}