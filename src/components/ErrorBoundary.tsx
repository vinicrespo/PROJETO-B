import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Check if it's a chunk loading error (common in Vite with lazy loading)
    if (error.name === 'ChunkLoadError' || error.message.includes('dynamically imported module') || error.message.includes('Failed to fetch dynamically imported module')) {
      // Reload the page once if we hit a chunk error
      const isReloaded = sessionStorage.getItem('chunk_reloaded');
      if (!isReloaded) {
        sessionStorage.setItem('chunk_reloaded', 'true');
        window.location.reload();
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oups! Quelque chose s'est mal passé.</h2>
          <p className="text-gray-600 mb-6">Un problème est survenu lors du chargement de la page. Veuillez rafraîchir.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Rafraîchir la page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
