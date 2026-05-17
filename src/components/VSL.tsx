/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VSL() {
  return (
    <section id="vsl" className="bg-black py-6 px-2 overflow-hidden">
      <div className="mx-auto w-full max-w-[400px]">
        {/* @ts-ignore */}
        <vturb-smartplayer id="vid-6a08fb50672735d01886848f" style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}></vturb-smartplayer>
      </div>
    </section>
  );
}
