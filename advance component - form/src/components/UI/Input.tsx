import { forwardRef } from "react";
import { InputProps } from "../../types/types.tsx";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, name, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} ref={ref} required />
    </p>
  );
});

export default Input;
