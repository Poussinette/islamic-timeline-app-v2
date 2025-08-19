import React from 'react';
import { Timeline } from './components/Timeline';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-gold-50">
      <div className="container mx-auto px-4 py-8">
        <Timeline />
      </div>
    </div>
  );
}

export default App;
