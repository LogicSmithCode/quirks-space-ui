import React from 'react';
import { Eye } from 'lucide-react';

const domain = import.meta.env.VITE_COMPANY_DOMAIN;
const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;
const companyNameLong = import.meta.env.VITE_COMPANY_NAME_LONG;

export default function Accessibility() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Eye className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Accessibility Statement</h1>
      </div>

      <div className="space-y-8 text-gray-300">
        <div>
          <p className="text-lg">{companyName} is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Conformance Status</h2>
          <p>Our website follows the WCAG 2.1 (Web Content Accessibility Guidelines) Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Semantic HTML structure for better screen reader compatibility</li>
            <li>Keyboard navigation support throughout the website</li>
            <li>Color contrast ratios that meet WCAG 2.1 Level AA standards</li>
            <li>Alt text for all informative images</li>
            <li>Resizable text without loss of functionality</li>
            <li>Clear heading hierarchy and page structure</li>
            <li>ARIA labels and landmarks for enhanced navigation</li>
            <li>Focus indicators for interactive elements</li>
            <li>Skip navigation links for keyboard users</li>
            <li>Consistent and predictable navigation</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Assistive Technologies Supported</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Keyboard-only navigation</li>
            <li>Browser zoom functionality</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>
          <p>While we strive to ensure accessibility across all areas of our website, some content may have limitations:</p>
          <ul className="list-disc pl-6 mt-4 space-y-3">
            <li>Legacy PDFs may not be fully accessible</li>
            <li>Some third-party content may not meet accessibility standards</li>
            <li>Interactive data visualizations may have limited accessibility</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
          <p>We are committed to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-3">
            <li>Regular accessibility audits and testing</li>
            <li>Addressing accessibility issues promptly</li>
            <li>Training our team on accessibility best practices</li>
            <li>Incorporating accessibility in our development process</li>
          </ul>
        </div>

        <div className="mt-12 p-6 bg-gray-800/30 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Feedback</h2>
          <p className="mb-4">We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact our accessibility team at:</p>
          <a href={`mailto:accessibility@${domain}`} className="text-blue-400 hover:text-blue-300">accessibility@{domain}</a>
        </div>
      </div>
    </div>
  );
}