/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface CommentProps {
  name: string;
  avatar: string;
  text: string;
  time: string;
  likes?: number;
}

const commentsData: CommentProps[] = [
  {
    name: "Valérie Petit",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Si j'avais trouvé cette vídeo plus tôt, je n'aurais pas perdu autant de temps et d'argent à essayer de maigrir !",
    time: "1 min"
  },
  {
    name: "Céline Lefevre",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Grâce à Dieu, j'ai regardé la vidéo jusqu'au bout, maintenant je comprends pourquoi je n'arrive pas à perdre du poids, je vais commencer dès aujourd'hui. Merci !",
    time: "2 min"
  },
  {
    name: "Colette Dubois",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Pensaba que mi genética era la culpable de mis constantes subidas y bajadas de peso. ¡Por fin encontré algo que funciona!",
    time: "5 min"
  },
  {
    name: "Léa Rocher",
    avatar: "https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Moi aussi, je pensais que c'était moi le problème. Heureusement que Amélie a tout expliqué!",
    time: "10 min"
  },
  {
    name: "Amélie Martinet",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Comment est-ce que je fais pour regarder la vidéo ? Il suffit de cliquer dessus ?",
    time: "16 min"
  },
  {
    name: "Madeleine Rousseau",
    avatar: "/madeleine-profile.webp",
    text: "Il suffit de cliquer sur la vidéo et elle commence.",
    time: "14 min"
  },
  {
    name: "Éloïse Leroux",
    avatar: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?auto=format&fit=crop&w=96&h=96&q=70",
    text: "La vidéo est-elle très longue ? Est-ce que quelqu'un peut me le dire ?",
    time: "10 min"
  },
  {
    name: "Simone Allard",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=96&h=96&q=70",
    text: "Elle convient, j'ai 72 ans, je l'ai utilisée et j'ai perdu 9 kg. Je n'ai plus mal aux genoux, c'est incroyable !",
    time: "1 h"
  }
];

export default function Comments() {
  return (
    <section id="comments" className="bg-[#2d6a4f] py-8 px-2 md:px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">15 commentaires</span>
            <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
          </h2>

          <div className="space-y-6">
            {commentsData.map((comment, index) => (
              <div key={index} className="flex space-x-3">
                <img 
                  src={comment.avatar} 
                  alt={comment.name} 
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 border-2 border-gray-50 shadow-sm object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1">
                  <div className="bg-[#f0f2f5] p-3 rounded-2xl">
                    <p className="font-bold text-[#365899] text-sm md:text-base hover:underline cursor-pointer">
                      {comment.name}
                    </p>
                    <p className="text-gray-800 text-sm md:text-base leading-snug mt-1">
                      {comment.text}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 text-xs md:text-sm font-semibold text-gray-500 mt-1 ml-2">
                    <button className="hover:underline text-[#65676b]">Répondre</button>
                    <span>·</span>
                    <button className="hover:underline text-[#65676b]">J'aime</button>
                    <span>·</span>
                    <button className="hover:underline text-[#65676b]">Suivre</button>
                    <span>·</span>
                    <span className="font-normal">{comment.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400 font-medium">
            <span>Plugin social Facebook</span>
            <div className="flex items-center space-x-1">
              <span>Afficher plus</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
