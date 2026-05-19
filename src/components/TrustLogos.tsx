/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TrustLogos() {
  return (
    <section id="trust-logos" className="py-6 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 flex justify-center">
        <img 
          src="/trust-logos.png" 
          alt="TF1, ABC, NBC, Fox News Logos" 
          width={600}
          height={64}
          className="h-10 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
