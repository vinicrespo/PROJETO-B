/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TrustLogos() {
  return (
    <section id="trust-logos" className="py-6 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 flex justify-center">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9YVqCEnP-dHe9E_Z1kP_W47z9fR9tU9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9W9p9" 
          alt="TF1, ABC, NBC, Fox News Logos" 
          className="h-10 md:h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
          onError={(e) => {
            // Fallback to individual logos if combined one fails or is not available
            e.currentTarget.style.display = 'none';
          }}
          referrerPolicy="no-referrer"
        />
        {/* Static fallback for cleaner UI if the above is placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4ga9byDfG01pMdZ3gC_sF1xIhFL2nlmf1RwDr3BSw_6h-Uhm-wlFjByKHg203hvtrDgLhAuqAQYuSkOBhq8q_d45HUYGkhtpx0sx3nnF_0FST8Y7BTz7yWrOSy3YMlw581CwN6BgKmP8ogGcph4vMQc3jiBo3KToXXfVS9Tyzg6oAJ3ZF4FLK8Eo0EsWU23DkRtqE8rcFzYDZuEdc3yYfUcqcKyZOd2-2K6pTgHTZchnMfyAmOv62N1AXOKcxhddCXqK6iFyz2JU" alt="CBS" className="h-8 md:h-12 w-auto object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGbi2v4uqw-C6uiy8m4sX__4zkuzNFSOG-PJGJJcLV0VCvRezuZuBkTgu3CTfsxj1sasth7JK2DoFLrFbyERgnbyjjUpEaeqiMBbOKYCSW5m_dipyMJlvgTOfaUrR1i-0vw-NcFQc0FSI3SQCIgYQJuT96sgp7M4lRmQuizJrMJsxSXxVqdNcqe5htrv3PGkkHg2VaRweX5zhgh1gm7FxofSt-Ff3iMDAb16IH3jCqrOJQx_98B8DYNf8nx9b06B6p-4J1KBb3kuk" alt="ABC" className="h-8 md:h-12 w-auto object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlfnEIq04xA4avdDzft7GWg7wpCE3AK_Sf_0RK73Xvib7MQlwgQFjNaQtlFGjM4m6Emd6iNBF02ecaAlTZvzDUncpqQPkFk73e5_2Fe15Hqv2S0x9oAX73l_UX8ZxmcE7dqOVwLpzfk3iHP20Nj1WUquhojfVRpKw9_kVSX3a9xMbIUShmDaP0UzkloSx0pY9VUzktYAVIrjgTeQSqSEB5UnHp9U4qkv-JdfzauiXlZ80suOfhOp-9lE81ytoIPI0ESmWAL5Ug570" alt="NBC" className="h-8 md:h-12 w-auto object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP5XM7dps9NElj8iXsW_xzYCs8t7bmOXKigbBFkeVcOiqCI3lvM6xjVrGrn41xTsNc-GheL2u-4O7aaU8bRpC2aChgwUg2fOyNIXPpn1PuP13vgH53fatK92flqaiaZmuG4Ek8iHrnuZydcZieGXres_dEL5yihtix_h8tpgS8n3zhA5NO2ysLmJ_GZD1jDcwOToTC-RVfB__UHZ8GAm6cU1TJWDbQ8kn8YKh8hjyyI0vvYxjlrXZOgvI-6eMSDYJ3KpXp2cV3kKM" alt="FOX" className="h-10 md:h-14 w-auto object-contain grayscale opacity-60" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}
