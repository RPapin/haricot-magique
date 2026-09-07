import * as React from 'react';

/** Surface de contenu: filet 1px, rayon 14px, ombre quasi nulle au repos. */
export interface CardProps {
  tone?: 'paper' | 'sunk' | 'invert';
  /** Active le lift de -2px et l'ombre diffuse au survol. */
  interactive?: boolean;
  padding?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
