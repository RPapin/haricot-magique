/** Onglets soulignés — saisons, familles de légumes. */
export interface TabItem { id: string; label: string; count?: number }
export interface TabsProps {
  items?: TabItem[];
  value?: string;
  onChange?: (id: string) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
