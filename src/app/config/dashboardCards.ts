import { FlaskConical, Calendar, Sunrise, AlertTriangle, Sparkles, Droplet, Heart, Activity } from 'lucide-react';
import type { ComponentType } from 'react';

export interface DashboardCard {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  route: string;
  badge?: string;
  badgeColor?: 'green' | 'gold';
  featured?: boolean;
  available: boolean;
}

export const dashboardCards: DashboardCard[] = [
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
];
