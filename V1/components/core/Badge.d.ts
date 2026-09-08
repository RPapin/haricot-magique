import * as React from 'react';

/** Pastille d'état de récolte: disponible, bientôt, terminé. */
export interface BadgeProps {
  tone?: 'dispo' | 'bientot' | 'fini' | 'bio' | 'info';
  /** Ajoute un point de couleur avant le texte. */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
