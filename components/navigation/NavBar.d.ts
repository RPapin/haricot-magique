/** Barre de navigation collante du site, crème translucide + filet bas. */
export interface NavBarLink { id: string; label: string; href?: string }
export interface NavBarProps {
  links?: NavBarLink[];
  /** Id du lien courant — souligné en carotte. */
  active?: string;
  onNavigate?: (id: string) => void;
  /** Texte du bouton à droite; `null` pour le masquer. */
  cta?: string | null;
  onCta?: () => void;
}
export function NavBar(props: NavBarProps): JSX.Element;
