import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RBACProvider } from './context/RBACContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import RoleList from './components/RoleList';

function App() {
  return (
    <RBACProvider>
      <Router>
        <div className="flex flex-col lg:flex-row min-h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/roles" element={<RoleList />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </RBACProvider>
  );
}

export default App;