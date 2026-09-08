/** Bouton circulaire à icône seule (nav, carrousel, fermeture). */
export interface IconButtonProps {
  /** Nom d'icône Phosphor sans préfixe. */
  icon?: string;
  /** Obligatoire: libellé accessible. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  tone?: 'neutral' | 'solid' | 'soft';
  onClick?: () => void;
}
export function IconButton(props: IconButtonProps): JSX.Element;
