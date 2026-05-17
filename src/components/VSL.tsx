/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function VSL() {
  useEffect(() => {
    const scriptId = 'vturb-player-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/d21a9e1d-910e-4254-b2bc-30b12586d2ef/players/6a08fb50672735d01886848f/v4/player.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="vsl" className="bg-black py-6 px-2 overflow-hidden">
      <div className="mx-auto w-full max-w-[400px]">
        {/* @ts-ignore */}
        <vturb-smartplayer id="vid-6a08fb50672735d01886848f" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
      </div>
    </section>
  );
}
