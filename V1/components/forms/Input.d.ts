import * as React from 'react';

/** Champ texte ou zone de texte, filet crème, anneau de focus carotte. */
export interface InputProps {
  label?: string;
  hint?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Message d'erreur — remplace le hint et passe le filet en tomate. */
  error?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  id?: string;
}
export function Input(props: InputProps): JSX.Element;
