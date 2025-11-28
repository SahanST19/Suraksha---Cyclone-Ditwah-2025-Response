import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import RequestHelp from './pages/RequestHelp';

function App() {
  // Simple routing for now (can be expanded with react-router-dom)
  const path = window.location.pathname;

  let Component;
  switch (path) {
    case '/':
      Component = Home;
      break;
    case '/map':
      Component = Home; // Reuse Home for now or create specific MapView
      break;
    case '/help':
      Component = RequestHelp;
      break;
    default:
      Component = Home;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Component />
    </div>
  );
}

export default App;
