import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy to-blue-700 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-2xl">
        <div className="text-9xl font-bold mb-6 text-brand-green">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-100 mb-8">
          Oops! It looks like you've ventured into unknown territory. The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-brand-green hover:bg-opacity-90 text-white font-bold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Home size={20} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
