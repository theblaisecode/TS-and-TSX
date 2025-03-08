import { FormEvent, useRef } from "react";
import { FormProps } from "../types/types.tsx";

function Form({ onSave, children, ...otherProps }: FormProps) {
  const form = useRef<HTMLFormElement | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    
    form.current?.reset()
  }

  return (
    <form action="" {...otherProps} onSubmit={handleSubmit} ref={form}>
      {children}
    </form>
  );
}

export default Form;
