/** Trio surtitre / titre serif / chapeau, en tête de chaque section. */
export interface SectionHeadingProps {
  /** Surtitre en capitales espacées, couleur carotte. */
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  level?: 1 | 2 | 3;
  tone?: 'ink' | 'invert';
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
