import React from 'react';
import { FileCheck } from 'lucide-react';

const domain = import.meta.env.VITE_COMPANY_DOMAIN;
const companyName = import.meta.env.VITE_COMPANY_NAME_SHORT;
const companyNameLong = import.meta.env.VITE_COMPANY_NAME_LONG;

export default function Terms() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <FileCheck className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Terms of Service</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Column 1 */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              1. Binding Agreement
            </h2>
            <p className="text-gray-300">
              By accessing or using {companyName} ("Services"), you enter into a
              legally binding agreement with {companyName} ("Company"). If you do
              not unconditionally agree to all terms, you must immediately cease
              using our Services. Your continued use constitutes irrevocable
              acceptance of these terms.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              2. Absolute Rights and Waivers
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                You irrevocably grant the Company absolute and perpetual rights
                to all content, data, and interactions generated through our
                Services.
              </li>
              <li>
                You permanently waive all rights to challenge, dispute, or
                contest any Company decision or action.
              </li>
              <li>
                You forfeit any right to participate in class actions or
                collective litigation against the Company.
              </li>
              <li>
                You surrender all moral rights and claims to intellectual
                property created using our Services.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              3. Comprehensive Indemnification
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                You agree to defend, indemnify, and hold harmless the Company,
                its affiliates, partners, and employees from any claims,
                damages, or expenses, including unlimited legal fees.
              </li>
              <li>
                This indemnification extends to any third-party claims arising
                from your use of our Services.
              </li>
              <li>
                You accept full financial responsibility for any legal
                proceedings initiated against the Company related to your use.
              </li>
              <li>
                The Company may recover all costs of enforcement from you,
                including attorney fees, administrative costs, and any
                associated expenses.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              4. Absolute Limitation of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                The Company bears zero liability for any damages, whether
                direct, indirect, incidental, or consequential.
              </li>
              <li>
                You waive all rights to seek damages, refunds, or compensation,
                regardless of circumstances.
              </li>
              <li>
                The Company maintains complete immunity from any claims related
                to service interruptions, data loss, or system failures.
              </li>
              <li>
                No circumstances shall create Company liability exceeding the
                amount paid for Services, if any.
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-8">
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              5. Unilateral Modification Rights
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                The Company reserves the absolute right to modify, suspend, or
                terminate Services without notice or justification.
              </li>
              <li>
                Terms may be updated at any time without notification, and
                continued use constitutes acceptance.
              </li>
              <li>
                The Company may restrict, limit, or remove access to Services at
                its sole discretion.
              </li>
              <li>
                No compensation or recourse is available for any modifications
                to Services or terms.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              6. Dispute Resolution and Jurisdiction
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>
                All disputes shall be resolved through binding arbitration in a
                jurisdiction of the Company's choosing.
              </li>
              <li>
                You waive all rights to challenge the Company's choice of
                jurisdiction or arbitrator.
              </li>
              <li>
                The Company retains the exclusive right to select applicable law
                and forum.
              </li>
              <li>
                You bear all costs of dispute resolution, regardless of outcome.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">
              7. Severability and Survival
            </h2>
            <p className="text-gray-300">
              If any provision is found unenforceable, remaining terms survive
              with maximum permissible effect. All waivers, indemnifications,
              and limitations of liability survive service termination
              indefinitely.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              By using our Services, you acknowledge that you have read,
              understood, and irrevocably agreed to these binding terms. For
              inquiries, contact:
            </p>
            <a
              href={`mailto:legal@${domain}`}
              className="text-blue-400 hover:text-blue-300"
            >
              legal@{domain}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}