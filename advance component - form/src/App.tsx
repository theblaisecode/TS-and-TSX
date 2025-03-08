import { useRef } from "react";
import Buttons from "./components/Buttons.tsx";
// import Container from "./components/Container.tsx";
import Input from "./components/Input.tsx";
import Form from "./components/Form.tsx";
import { FormHandle } from "./types/types.tsx";

function App() {
  const customForm = useRef<FormHandle | null>(null);
  // const inputTest = useRef<HTMLInputElement | null>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave}>
        {/* <h2>Olla</h2>
        <Input label="Your Name" type="text" name="name" />
        <Input label="Your Age" type="number" name="age" />

        <h2>Testing</h2>
        <p>
          <Buttons type="submit">Some Button</Buttons>
        </p>

        <p>
          <Buttons href="https://www.theblaisecode.netlify.app" target="_blank">
            TheBlaiseCode Portfolio
          </Buttons>
        </p> */}

        {/* Polymorphic Component */}
        {/* <Container as={Input} />
        <Container as={Buttons}>Lalaland</Container> */}

        {/* forwardRef */}
        {/* <Input label="Test" id="test" name="test" type="text" ref={inputTest} /> */}

        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" label="Age" id="age" name="age" />

        <p>
          <Buttons>Save</Buttons>
        </p>
      </Form>
    </main>
  );
}

export default App;
