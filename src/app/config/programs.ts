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
  RefreshCw
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
    id: 'detox-10x',
    name: 'Mon Programme Détox 10X',
    subtitle: 'Accélérez votre transformation en désintoxiquant votre corps',
    accentColor: '#D4A574',
    badge: 'Détox 10X',
    icon: Flame,
    cards: [
      {
        id: 'detox-plan',
        title: 'Plan Brûle-Détox',
        description: 'Le protocole jour par jour pour expulser les toxines en 14 jours',
        icon: Calendar,
        route: '/app/dashboard/detox/plan',
        badge: 'Programme Principal',
        featured: true,
        available: true,
      },
      {
        id: 'detox-rituel-nuit',
        title: 'Rituel de Nuit',
        description: '2 minutes avant de dormir pour vous réveiller dégonflée',
        icon: Moon,
        route: '/app/dashboard/detox/rituel-nuit',
        available: true,
      },
      {
        id: 'detox-substitutions',
        title: 'Guide Anti-Toxines',
        description: 'Identifiez et remplacez les aliments qui vous épuisent',
        icon: ArrowLeftRight,
        route: '/app/dashboard/detox/substitutions',
        available: true,
      },
      {
        id: 'detox-sel-rose',
        title: 'Astuce du Sel Rose',
        description: 'Le protocole japonais pour brûler la graisse en mouvement',
        icon: Mountain,
        route: '/app/dashboard/detox/sel-rose',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'detox-lipo-maison',
        title: 'Lipo Maison',
        description: 'Le secret des mannequins pour affiner la taille en 72h',
        icon: Scissors,
        route: '/app/dashboard/detox/lipo-maison',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      },
      {
        id: 'detox-chocolat-minceur',
        title: 'Chocolat Minceur',
        description: 'La recette qui satisfait l\'envie de sucré tout en brûlant',
        icon: Cookie,
        route: '/app/dashboard/detox/chocolat-minceur',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      }
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
        description: 'Formule maison qui active le collagène et lisse la peau',
        icon: Droplet,
        route: '/app/dashboard/hormonal/creme-jeunesse',
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
        description: 'Le protocole complet 30 jours pour une peau ferme et tonique',
        icon: Sparkles,
        route: '/app/dashboard/anti-flasque/plan',
        badge: 'Programme Principal',
        featured: true,
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
        description: 'Le protocole d\'urgence après les excès',
        icon: RefreshCw,
        route: '/app/dashboard/maintien/reset-48h',
        badge: 'Bonus',
        badgeColor: 'gold',
        available: true,
      }
    ]
  }
];
