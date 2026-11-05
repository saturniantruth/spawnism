import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import { ArchiveProvider } from '@/lib/archive-context';
import Layout from './components/Layout';
// Add page imports here
import Home from './pages/Home';
import About from './pages/About';
import Bible from './pages/Bible';
import Beliefs from './pages/Beliefs';
import Branches from './pages/Branches';
import Symbols from './pages/Symbols';
import Holidays from './pages/Holidays';
import Prayers from './pages/Prayers';
import Offerings from './pages/Offerings';
import Sins from './pages/Sins';
import Glossary from './pages/Glossary';
import Sources from './pages/Sources';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      {/* Add your page Route elements here */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bible" element={<Bible />} />
        <Route path="/beliefs" element={<Beliefs />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/symbols" element={<Symbols />} />
        <Route path="/holidays" element={<Holidays />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/sins" element={<Sins />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/sources" element={<Sources />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <ArchiveProvider>
          <Router basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ScrollToTop />
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </ArchiveProvider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App