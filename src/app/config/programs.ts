import { 
  FlaskConical, 
  Calendar, 
  Sunrise, 
  AlertTriangle, 
  Sparkles, 
  Droplet, 
  Heart, 
  Activity,
  Leaf,
  Flame,
  Layers,
  Shield,
  Moon,
  ArrowLeftRight,
  Mountain,
  Scissors,
  Cookie,
  Coffee,
  RefreshCw,
  Microscope,
  Zap,
  BookOpen
} from 'lucide-react';
import type { ComponentType } from 'react';

export interface DashboardCard {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  route: string;
  badge?: string;
  badgeColor?: 'green' | 'gold' | 'custom';
  featured?: boolean;
  available: boolean;
}

export interface Program {
  id: string;
  name: string;
  subtitle: string;
  accentColor: string;
  badge: string;
  icon: ComponentType<{ className?: string }>;
  cards: DashboardCard[];
}

export const programs: Program[] = [
  {
    id: 'stylo-maison',
    name: 'Mon Programme Stylo Maison',
    subtitle: 'Votre transformation en 21 jours',
    accentColor: '#16A34A',
    badge: 'Stylo Maison',
    icon: Leaf,
    cards: [
      {
        id: 'recette',
        title: 'Ma Recette Personnalisée du Stylo Maison',
        description: 'Votre formule unique au vinaigre de cidre, calculée pour votre corps',
        icon: FlaskConical,
        route: '/app/dashboard/recette',
        badge: 'Personnalisé',
        badgeColor: 'green',
        featured: true,
        available: true,
      },
      {
        id: 'protocole',
        title: 'Protocole 21 Jours',
        description: 'Votre programme jour par jour pour perdre jusqu\'à 17 kg',
        icon: Calendar,
        route: '/app/dashboard/protocole',
        available: true,
      },
      {
        id: 'routine',
        title: 'Routine Matinale',
        description: 'Les étapes du matin qui activent votre métabolisme',
        icon: Sunrise,
        route: '/app/dashboard/routine',
        available: true,
      },
      {
        id: 'aliments',
        title: '10 Aliments à Éviter',
        description: 'Les aliments qui sabotent votre perte de poids (3 sont considérés sains !)',
        icon: AlertTriangle,
        route: '/app/dashboard/aliments',
        available: true,
      },
      {
        id: 'shot',
        title: 'Shot Japonais Articulations',
        description: 'La boisson japonaise qui soulage vos articulations en 7 jours',
        icon: Sparkles,
        route: '/app/dashboard/shot',
        available: true,
      },
      {
        id: 'cellulite',
        title: 'Bonus : Effacer la Cellulite',
        description: 'Le protocole naturel du Dr. Nancy Schwartz',
        icon: Droplet,
        route: '/app/dashboard/cellulite',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'vergetures',
        title: 'Bonus : Éliminer les Vergetures',
        description: '5 recettes naturelles pour une peau lisse',
        icon: Heart,
        route: '/app/dashboard/vergetures',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'fessiers',
        title: 'Bonus : Fessiers Galbés',
        description: 'Le plan 8 semaines des actrices',
        icon: Activity,
        route: '/app/dashboard/fessiers',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
    ]
  },
  {
    id: '7x',
    name: 'Mon Programme Accélérateur Intestinal 7X',
    subtitle: 'Multipliez votre combustion des graisses',
    accentColor: '#D4A574',
    badge: '7X',
    icon: Flame,
    cards: [
      {
        id: '7x-protocole',
        title: 'Protocole 7X',
        description: 'Le protocole complet pour éliminer les mauvaises bactéries en 10 jours',
        icon: Microscope,
        route: '/app/dashboard/7x/protocole',
        badge: 'Programme Principal',
        featured: true,
        available: true,
      },
      {
        id: '7x-shot-japonais',
        title: 'Shot Japonais Anti-Inflammation',
        description: 'Réduit les douleurs articulaires en 7 jours',
        icon: Zap,
        route: '/app/dashboard/7x/shot-japonais',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: '7x-guide-bacteries',
        title: 'Guide des Bonnes Bactéries',
        description: 'Les aliments qui transforment votre microbiote',
        icon: BookOpen,
        route: '/app/dashboard/7x/guide-bacteries',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
    ]
  },
  {
    id: 'shot-hormonal',
    name: 'Mon Programme Shot Hormonal',
    subtitle: 'Rééquilibrez vos hormones et libérez la combustion des graisses',
    accentColor: '#8B5CF6',
    badge: 'Shot Hormonal',
    icon: Sparkles,
    cards: [
      {
        id: 'hormonal-recette',
        title: 'Mon Shot Hormonal',
        description: 'Votre formule personnalisée pour rééquilibrer l\'estrogène',
        icon: FlaskConical,
        route: '/app/dashboard/hormonal/recette',
        badge: 'Programme Principal',
        featured: true,
        available: true,
      },
      {
        id: 'hormonal-tonique-desir',
        title: 'Tonique du Désir',
        description: 'Recette aphrodisiaque pour réveiller votre libido',
        icon: Heart,
        route: '/app/dashboard/hormonal/tonique-desir',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'hormonal-cafe-bariatrique',
        title: 'Café Bariatrique',
        description: 'La boisson du soir qui brûle pendant votre sommeil',
        icon: Coffee,
        route: '/app/dashboard/hormonal/cafe-bariatrique',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'hormonal-creme-jeunesse',
        title: 'Crème de Jeunesse',
        description: 'Soin maison pro-collagène',
        icon: Droplet,
        route: '/app/dashboard/hormonal/creme-jeunesse',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'hormonal_sommeil',
        title: 'Sommeil Réparateur',
        description: 'Fenêtre hormonale 22h-2h',
        icon: Moon,
        route: '/app/dashboard/hormonal/sommeil',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'hormonal_aliments',
        title: 'Les 5 Destructeurs',
        description: 'Aliments qui bloquent la perte',
        icon: AlertTriangle,
        route: '/app/dashboard/hormonal/aliments',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      }
    ]
  },
  {
    id: 'anti-flasque',
    name: 'Mon Programme Anti-Peau Flasque',
    subtitle: 'Raffermissez votre peau après votre perte de poids',
    accentColor: '#C19A8C',
    badge: 'Anti-Peau Flasque',
    icon: Layers,
    cards: [
      {
        id: 'anti-flasque-plan',
        title: 'Plan Raffermissement',
        description: '30 jours pour retendre votre peau',
        icon: Sparkles,
        route: '/app/dashboard/anti-flasque/plan',
        badge: 'Programme Principal',
        featured: true,
        available: true,
      },
      {
        id: 'anti_flasque_collagen',
        title: 'Bouillon Collagène',
        description: 'Le ciment naturel de votre peau',
        icon: Coffee,
        route: '/app/dashboard/anti-flasque/collagene',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'anti_flasque_gommage',
        title: 'Gommage Circulatoire',
        description: 'Recette caféine vasodilatatrice',
        icon: Droplet,
        route: '/app/dashboard/anti-flasque/gommage',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      }
    ]
  },
  {
    id: 'maintien-365',
    name: 'Mon Programme Maintien 365',
    subtitle: 'Verrouillez vos résultats pour les 365 prochains jours',
    accentColor: '#1E3A8A',
    badge: 'Maintien 365',
    icon: Shield,
    cards: [
      {
        id: 'maintien-plan',
        title: 'Plan Maintien 12 Mois',
        description: 'Votre calendrier mois par mois pour stabiliser votre poids',
        icon: Calendar,
        route: '/app/dashboard/maintien/plan',
        badge: 'Programme Principal',
        featured: true,
        available: true,
      },
      {
        id: 'maintien-recette',
        title: 'Recette Maintien',
        description: 'Version ajustée de votre formule pour l\'entretien quotidien',
        icon: FlaskConical,
        route: '/app/dashboard/maintien/recette',
        available: true,
      },
      {
        id: 'maintien-anti-yoyo',
        title: 'Anti-Effet Yoyo',
        description: 'Les 7 signaux qui annoncent une reprise et comment les bloquer',
        icon: AlertTriangle,
        route: '/app/dashboard/maintien/anti-yoyo',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'maintien-reset-48h',
        title: 'Reset 48H',
        description: 'Effacez vos excès du week-end',
        icon: RefreshCw,
        route: '/app/dashboard/maintien/reset-48h',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'maintien_cheat_meal',
        title: 'Guide du Cheat Meal',
        description: 'La règle des 3 boucliers',
        icon: Cookie,
        route: '/app/dashboard/maintien/cheat-meal',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'maintien_psy',
        title: 'Psychologie Minceur',
        description: 'Reprogrammez votre cerveau',
        icon: Activity,
        route: '/app/dashboard/maintien/psychologie',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      }
    ]
  }
];
