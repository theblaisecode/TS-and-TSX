import { useRef } from "react";
import Buttons from "./components/Buttons.tsx";
import Container from "./components/Container.tsx";
import Input from "./components/Input.tsx";

function App() {
  const inputTest = useRef<HTMLInputElement | null>(null);

  return (
    <main>
      <h2>Olla</h2>
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
      </p>

      {/* Polymorphic Component */}
      {/* <Container as={Input} /> */}
      <Container as={Buttons}>Lalaland</Container>

      {/* forwardRef */}
      <Input label="Test" id="test" name="test" type="text" ref={inputTest} />
    </main>
  );
}

export default App;
