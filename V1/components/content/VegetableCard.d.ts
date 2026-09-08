/**
 * Fiche légume: photo (ou aplat de la famille), nom serif, prix en mono, état de récolte.
 * @startingPoint section="Contenu" subtitle="Fiche légume en vente à la ferme" viewport="700x340"
 */
export interface VegetableCardProps {
  name: string;
  /** Nom latin, composé en italique serif. */
  latin?: string;
  /** Prix formaté, ex. « 2,80 € ». */
  price?: string;
  /** Unité de vente, ex. « le kg », « la botte ». */
  unit?: string;
  state?: 'dispo' | 'bientot' | 'fini';
  note?: string;
  /** Famille de légume — pilote l'aplat de fond. */
  color?: 'carotte' | 'tomate' | 'betterave' | 'aubergine' | 'courgette' | 'ble' | 'chou';
  /** `false` retire la zone image et compacte la fiche. */
  imageSlot?: boolean;
}
export function VegetableCard(props: VegetableCardProps): JSX.Element;
