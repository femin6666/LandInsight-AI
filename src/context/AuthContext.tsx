import React, { createContext, useContext, useState } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  isLoggedIn: boolean;
}

interface AuthContextType {
  user: UserProfile;
  login: (role?: string, name?: string, email?: string) => void;
  logout: () => void;
}

const defaultUser: UserProfile = {
  name: 'Dr. Ananya Sharma',
  email: 'ananya.sharma@dolr.gov.in',
  role: 'Senior Policy Researcher',
  department: 'DoLR Policy & Governance Cell',
  avatar: 'AS',
  isLoggedIn: true
};

const AuthContext = createContext<AuthContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  const login = (
    role = 'Senior Policy Researcher',
    name = 'Dr. Ananya Sharma',
    email = 'ananya.sharma@dolr.gov.in'
  ) => {
    setUser({
      name,
      email,
      role,
      department: role.includes('Collector') ? 'District Revenue Administration' : 'DoLR Policy Analytics Cell',
      avatar: name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
      isLoggedIn: true
    });
  };

  const logout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
