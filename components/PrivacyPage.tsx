import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="mb-16 animate-reveal">
          <span className="text-[10px] md:text-[12px] font-semibold uppercase tracking-widest-custom text-neutral-400 mb-4 block">Legal Documentation</span>
          <h1 className="text-[48px] md:text-[72px] font-black tracking-tight-custom leading-[0.95] mb-8">
            Privacy <span className="font-serif italic font-light opacity-40">Policy.</span>
          </h1>
        </div>

        <div className="prose prose-neutral max-w-none animate-reveal space-y-8 text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p>
              At SLB OVERSEAS, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data: includes first name, last name, username or similar identifier.</li>
              <li>Contact Data: includes email address and telephone numbers.</li>
              <li>Technical Data: includes internet protocol (IP) address, your login data, browser type and version.</li>
              <li>Usage Data: includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: slboverseas2025@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
