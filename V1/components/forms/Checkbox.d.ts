/** Case à cocher (rappel de récolte, newsletter du potager). */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  hint?: string;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
