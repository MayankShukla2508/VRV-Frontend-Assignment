import React, { useState } from 'react';
import { Edit2, Trash2, ShieldPlus } from 'lucide-react';
import { useRBAC } from '../context/RBACContext';
import { Role, Permission } from '../types';

const RoleList: React.FC = () => {
  const { roles, addRole, updateRole, deleteRole } = useRBAC();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: [] as Permission[],
  });

  // ... rest of the component code remains the same ...
};

export default RoleList;