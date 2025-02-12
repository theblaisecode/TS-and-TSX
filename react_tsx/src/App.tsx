import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";

function App() {
  return (
    <main>
      {/* <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up!"
      /> */}

      {/* ------------------------------------------------ */}
      {/* <Header source={goalsImg} imgAlt="A list of goals" >
        <h1>Your Course Goals</h1>
      </Header> */}

      <Header image={{ source: goalsImg, imgAlt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <CourseGoal title="Olla" description="This is Spanish">
        <p>I spoke Spanish</p>
      </CourseGoal>
    </main>
  );
}

export default App;
