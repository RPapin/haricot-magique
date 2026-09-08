/**
 * Le nom de la ferme composé en type — aucun logo n'a été fourni avec les sources.
 * @startingPoint section="Brand" subtitle="Nom de la ferme composé en Newsreader" viewport="700x150"
 */
export interface WordmarkProps {
  size?: 'sm' | 'md' | 'lg';
  tone?: 'ink' | 'invert';
  /** Affiche la ligne « Maraîchage en permaculture · La Tour de Salvagny ». */
  subtitle?: boolean;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
