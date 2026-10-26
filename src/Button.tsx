export interface ButtonProps {
  size?: "small" | "medium" | "large";
  label: string;
}

/** Primary UI component for user interaction */
export const Button = (props: ButtonProps) => {
  const { label, ...propsToForward } = props;

  return (
    <button type="button" {...propsToForward}>
      {label}
    </button>
  );
};
