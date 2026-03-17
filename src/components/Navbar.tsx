import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/nscrizaa.svg";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/#services" },
  { name: "Products", path: "/#products" },
  { name: "Blog", path: "/#blog" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`w-full max-w-7xl flex items-center justify-between h-16 px-6 rounded-2xl transition-all duration-500 glass-morphism ${scrolled ? "shadow-premium border-white/30" : "border-white/10"
          }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src={logo}
              alt="ScrizaPay"
              className="h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.path.startsWith("/#") ? (
                <a
                  href={item.path}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors rounded-lg hover:bg-white/40 group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-4 transition-all duration-300" />
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/40 group ${location.pathname === item.path ? "text-accent" : "text-gray-700 hover:text-accent"
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${location.pathname === item.path ? "w-4" : "w-0 group-hover:w-4"}`} />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-accent text-accent-foreground text-sm font-bold shadow-accent hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            <User size={16} className="relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Partner Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800 p-2 rounded-xl bg-white/40 hover:bg-white/60 transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 lg:hidden glass-morphism p-6 rounded-2xl shadow-premium border border-white/20"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {item.path.startsWith("/#") ? (
                    <a
                      href={item.path}
                      className="text-base block font-medium text-gray-700 hover:text-accent py-3 px-4 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-white/20"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-base block font-medium py-3 px-4 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-white/20 ${location.pathname === item.path ? "text-accent bg-white/50 border-white/20" : "text-gray-700 hover:text-accent"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-200/50">
                <a
                  href="#"
                  className="px-5 py-3 rounded-xl bg-gradient-accent text-accent-foreground text-sm font-bold text-center shadow-accent flex items-center justify-center gap-2 group"
                >
                  <User size={16} className="group-hover:rotate-12 transition-transform" />
                  Partner Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
