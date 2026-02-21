import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="mb-16 animate-reveal">
          <span className="text-[10px] md:text-[12px] font-semibold uppercase tracking-widest-custom text-neutral-400 mb-4 block">Legal Documentation</span>
          <h1 className="text-[48px] md:text-[72px] font-black tracking-tight-custom leading-[0.95] mb-8">
            Terms of <span className="font-serif italic font-light opacity-40">Service.</span>
          </h1>
        </div>

        <div className="prose prose-neutral max-w-none animate-reveal space-y-8 text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website at slboverseas.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on SLB OVERSEAS' website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mt-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on SLB OVERSEAS' website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p>
              The materials on SLB OVERSEAS' website are provided on an 'as is' basis. SLB OVERSEAS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
            <p>
              In no event shall SLB OVERSEAS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SLB OVERSEAS' website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
