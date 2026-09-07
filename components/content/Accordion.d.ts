/** Questions fréquentes: filets seuls, +/- carotte, aucune boîte. */
export interface AccordionItem { id?: string; question: string; answer: string }
export interface AccordionProps {
  items?: AccordionItem[];
  /** Id (ou index) ouvert au chargement. */
  defaultOpen?: string | number | null;
}
export function Accordion(props: AccordionProps): JSX.Element;
