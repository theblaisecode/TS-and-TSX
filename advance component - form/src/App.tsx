import Buttons from "./components/Buttons.tsx";
import Input from "./components/Input.tsx";

function App() {
  return (
    <main>
      <h2>Olla</h2>
      <Input label="Your Name" type="text" name="name" />
      <Input label="Your Age" type="number" name="age" />

      <h2>Testing</h2>
      <p>
        <Buttons element="button" type="submit">
          Some Button
        </Buttons>
      </p>

      <p>
        <Buttons
          element="anchor"
          href="https://www.theblaisecode.netlify.app"
          target="_blank">
          TheBlaiseCode Portfolio
        </Buttons>
      </p>
    </main>
  );
}

export default App;
