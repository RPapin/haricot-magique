import * as React from 'react';

/**
 * Bouton d'action principal du Haricot Magique — pilule, serif-free, presse à 0.98.
 * @startingPoint section="Core" subtitle="Boutons: primaire, accent, contour, fantôme" viewport="700x150"
 */
export interface ButtonProps {
  /** Registre visuel. `primary` = basilic, `accent` = carotte (1 seul par écran). */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Rend un <a> au lieu d'un <button>. */
  href?: string;
  /** Nom d'icône Phosphor sans préfixe, ex. `basket`. */
  icon?: string;
  /** `true` = flèche ↗ dans sa pastille ronde, ou nom d'icône Phosphor. */
  iconTrailing?: boolean | string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
