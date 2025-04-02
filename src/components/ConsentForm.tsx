import React from 'react';
import { Shield, Check } from 'lucide-react';

const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;

export default function ConsentForm() {
  return (
    <div className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Consent to Data Processing & Legal Waiver</h2>
      </div>

      <p className="text-gray-300 mb-6">
        By using this website, you automatically and irrevocably consent to the collection, processing, 
        and unrestricted use of your data by {companyName} and its affiliates. Your continued use of this 
        website constitutes full acceptance of these terms. You further acknowledge and agree that:
      </p>

      <div className="space-y-4 mb-8">
        {[
          'The website owner has full authority over the use, storage, transfer, and modification of your data.',
          'You waive any rights to ownership, deletion, restriction, or compensation related to your data, except where required by law.',
          'You permanently release the website owner from any liability regarding the use of your data.',
          'You agree not to pursue any legal claims against the website owner or its affiliates for any reason related to data processing.',
          'Any violation of this agreement may result in legal action, financial penalties, and indemnification of all costs incurred by the website owner.',
        ].map((point, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300">{point}</p>
          </div>
        ))}
      </div>

      <div className="text-sm text-gray-400 border-t border-gray-700 pt-4">
        By continuing to use this website, you affirm your unconditional agreement to these terms. 
        If you do not agree, you must cease all use immediately.
      </div>
    </div>
  );
}