import React from 'react';
import Homestack from './routes/homestack';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
        <Homestack/>
    </AuthProvider>
    
  );
}

