import { useRef } from "react";
import Buttons from "./UI/Buttons.tsx";
import Input from "./UI/Input.tsx";
import Form from "./UI/Form.tsx";
import { FormHandle } from "../types/types.tsx";

function AddTimer() {
  const form = useRef<FormHandle | null>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData); 
    form.current?.clear();
  }

  return (
    <main>
      <Form ref={form} onSave={handleSave}>
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" label="Age" id="age" name="age" />

        <p>
          <Buttons>Add Timer</Buttons>
        </p>
      </Form>
    </main>
  );
}

export default AddTimer;
