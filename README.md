---

# **Role-Based Access Control (RBAC) Dashboard**

## **Overview**
This project is a Role-Based Access Control (RBAC) dashboard built using **React**, **TypeScript**, and **Tailwind CSS**. It provides a secure and user-friendly interface for managing users, roles, and permissions efficiently. Administrators can assign roles, define permissions, and manage user activity in an intuitive and visually appealing dashboard.

---

## **Features**
### 1. **User Management**
- View and manage users in an organized list.
- Add, edit, or delete users effortlessly.
- Assign roles to users and toggle their status (Active/Inactive).

### 2. **Role Management**
- Define new roles and edit existing ones.
- Assign permissions (e.g., Read, Write, Delete) or custom attributes to roles.

### 3. **Dynamic Permissions**
- Modify permissions dynamically for roles.
- Visualize and organize permissions for easy understanding.

### 4. **Custom API Simulation** *(Optional)*
- Mock API calls for CRUD operations on users and roles.
- Simulate server responses to validate application functionality.

---

## **Project Structure**
### **Components**
- **`App.tsx`**: The main application component that sets up the router and context provider.
- **`Dashboard.tsx`**: Displays statistics and recent user activity.
- **`Header.tsx`**: The header component with notifications and settings.
- **`RoleList.tsx`**: Manages roles and their permissions.
- **`Sidebar.tsx`**: The sidebar navigation component.
- **`UserList.tsx`**: Manages users and their roles.

### **Context**
- **`RBACContext.tsx`**: Provides the context for managing users and roles.

### **Types**
- **`index.ts`**: Defines TypeScript types for users, roles, and the RBAC context.

---

## **Setup Instructions**
### **Prerequisites**
Ensure the following are installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### **Steps to Run the Project**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## **Configuration Files**
### Tailwind CSS
- **`tailwind.config.js`**: Tailwind CSS configuration file for customizing styles.
- **`postcss.config.js`**: PostCSS configuration for processing Tailwind CSS.

### TypeScript
- **`tsconfig.json`**: TypeScript configuration file.

### Build Tooling
- **`vite.config.ts`**: Vite configuration file for fast builds and hot-reloading.

### Linting
- **`eslint.config.js`**: ESLint configuration file for enforcing code quality and standards.

---

## **Technologies Used**
- **React**: Library for building user interfaces.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and development server.
- **ESLint**: Tool for identifying and fixing code issues.

---

![image](https://github.com/user-attachments/assets/606fea35-8168-484c-81ec-f9c6cd0256ec)

---
## **License**

This project is licensed under the [MIT License](LICENSE). 

---
