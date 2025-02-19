import { type FormEvent } from "react";

function NewGoal() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const goal = formData.get("goal");
    const summary = formData.get("summary");

    console.log({ goal, summary });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" name="goal" />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" name="summary" />
      </p>

      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
