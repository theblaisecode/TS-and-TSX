import { InputProps } from "../types/types.tsx";

function Input({ label, name, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} required />
    </p>
  );
}

export default Input;
