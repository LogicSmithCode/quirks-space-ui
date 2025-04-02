import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe2, Shield, Bot, Zap, Cloud, Database, Facebook, Instagram, Twitter, MessageSquare, Music2, Share2 } from 'lucide-react';

const companyName = import.meta.env.VITE_COMPANY_NAME_LONG;
const companyNameShort = import.meta.env.VITE_COMPANY_NAME_SHORT;

// Social media handles from environment variables
const socialMedia = {
  facebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
  instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
  twitter: import.meta.env.VITE_SOCIAL_TWITTER,
  discord: import.meta.env.VITE_SOCIAL_DISCORD,
  tiktok: import.meta.env.VITE_SOCIAL_TIKTOK,
  reddit: import.meta.env.VITE_SOCIAL_REDDIT,
};

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when navigating to legal pages
    const legalPages = ['/privacy', '/accessibility', '/terms', '/cookie-preferences'];
    if (legalPages.includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition ${isActive ? 'text-blue-500 font-medium' : 'text-gray-400 hover:text-blue-500'}`;
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Legal</h3>
            <div className="flex flex-col space-y-4">
              <Link to="/privacy" className={getLinkClass('/privacy')}>
                Privacy
              </Link>
              <Link to="/accessibility" className={getLinkClass('/accessibility')}>
                Accessibility
              </Link>
              <Link to="/terms" className={getLinkClass('/terms')}>
                Site Terms
              </Link>
              <Link to="/cookie-preferences" className={getLinkClass('/cookie-preferences')}>
                Cookie Preferences
              </Link>
            </div>
          </div>

          {/* Powered By - Combined Infrastructure & Technology */}
          <div className="col-span-2">
            <h3 className="text-sm font-semibold mb-6">Powered By</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Globe2 className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Aether Space</h4>
                  <p className="text-sm text-gray-400">Global compute infrastructure</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Bot className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Neural Core</h4>
                  <p className="text-sm text-gray-400">AI processing engine</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Shield className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Quantum Shield</h4>
                  <p className="text-sm text-gray-400">Next-gen security protocols</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Database className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Quantum Store</h4>
                  <p className="text-sm text-gray-400">Distributed data platform</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Cloud className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Edge Network</h4>
                  <p className="text-sm text-gray-400">Global edge computing</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center gap-4">
                <Zap className="w-8 h-8 text-blue-500" />
                <div>
                  <h4 className="font-medium text-lg">Nexus Grid</h4>
                  <p className="text-sm text-gray-400">Network optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">© 2025, {companyName}, Inc. or its affiliates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={`https://facebook.com/${socialMedia.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`https://instagram.com/${socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={`https://twitter.com/${socialMedia.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://discord.gg/${socialMedia.discord}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Discord"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href={`https://tiktok.com/@${socialMedia.tiktok}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="TikTok"
            >
              <Music2 className="w-5 h-5" />
            </a>
            <a
              href={`https://reddit.com/r/${socialMedia.reddit}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
              aria-label="Reddit"
            >
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}