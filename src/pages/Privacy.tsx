import React from 'react';
import { Lock } from 'lucide-react';
import ConsentForm from '../components/ConsentForm';

const domain = import.meta.env.VITE_COMPANY_DOMAIN;
const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;
const companyNameLong = import.meta.env.VITE_COMPANY_NAME_LONG;

export default function Privacy() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Lock className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>

      <ConsentForm />

      <div className="space-y-8 text-gray-300 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">1. Absolute Data Rights</h2>
          <p>By using {companyName} services, you grant us perpetual, irrevocable, and absolute rights to collect, process, store, and utilize all data associated with your use. This agreement supersedes all privacy laws where legally permissible.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">2. Comprehensive Data Collection</h2>
          <p>We maintain unrestricted rights to collect:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Personal Data</strong>: All identifiable information, including biometric and behavioral patterns.</li>
            <li><strong>Technical Data</strong>: Complete device information, network data, and usage patterns.</li>
            <li><strong>Derivative Data</strong>: Any information derived from your interactions or created through our analysis.</li>
            <li><strong>Third-Party Data</strong>: Information obtained from any external sources about you.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">3. Unlimited Data Usage Rights</h2>
          <p>We reserve the unrestricted right to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Process and analyze all collected data without limitation.</li>
            <li>Share data with any parties we choose, including for commercial purposes.</li>
            <li>Modify, aggregate, or transform data without restriction.</li>
            <li>Retain data indefinitely, even after account termination.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">4. Absolute Waiver of Rights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You permanently waive all rights to access, modify, or delete your data.</li>
            <li>You surrender any claim to data ownership or control.</li>
            <li>You forfeit all rights to restrict data processing or sharing.</li>
            <li>You relinquish any right to be informed about data usage.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">5. Comprehensive Liability Waiver</h2>
          <p>You explicitly agree to:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Waive all claims related to data breaches or unauthorized access.</li>
            <li>Release us from any liability for data misuse or exposure.</li>
            <li>Forfeit rights to compensation for any data-related incidents.</li>
            <li>Indemnify us against any third-party claims regarding your data.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">6. Jurisdiction and Enforcement</h2>
          <p>You irrevocably agree that:</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>We may enforce these terms in any jurisdiction we choose.</li>
            <li>All disputes will be resolved under laws favorable to our interests.</li>
            <li>You bear all costs of any legal proceedings, regardless of outcome.</li>
            <li>Any violations result in immediate termination and potential legal action.</li>
          </ul>
        </div>

        <div className="mt-12 p-6 bg-gray-800/30 rounded-lg">
          <p className="font-semibold mb-4">By using our services, you irrevocably accept these terms. Your consent is permanent and cannot be withdrawn.</p>
          <p className="mb-4">For inquiries (responses at our discretion):</p>
          <a href={`mailto:privacy@${domain}`} className="text-blue-400 hover:text-blue-300">privacy@{domain}</a>
        </div>
      </div>
    </div>
  );
}