import * as React from 'react';

/** Étiquette de famille de légume — sert aussi de filtre sélectionnable. */
export interface TagProps {
  color?: 'carotte' | 'tomate' | 'betterave' | 'aubergine' | 'courgette' | 'ble' | 'chou' | 'basilic';
  selected?: boolean;
  /** Fourni ⇒ le tag devient un filtre cliquable. */
  onClick?: () => void;
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
