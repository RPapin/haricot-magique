import * as React from 'react';

/** Liste déroulante (jour de retrait, taille du panier). */
export interface SelectProps {
  label?: string;
  /** Chaînes simples ou objets `{value,label}`. */
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hint?: string;
  id?: string;
}
export function Select(props: SelectProps): JSX.Element;
