import { FormEvent, forwardRef, useImperativeHandle, useRef } from "react";
import { FormProps } from "../types/types.tsx";

const Form = forwardRef(function Form(
  { onSave, children, ...otherProps }: FormProps,
  ref
) {
  const form = useRef<HTMLFormElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARING");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);

    form.current?.reset();
  }

  return (
    <form action="" {...otherProps} onSubmit={handleSubmit} ref={form}>
      {children}
    </form>
  );
});

export default Form;
