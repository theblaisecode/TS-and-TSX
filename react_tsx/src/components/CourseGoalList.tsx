import { CourseGoalArr } from "../types/types.tsx";
import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CourseGoalListProp = {
  goals: CourseGoalArr[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProp) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        You're collecting a lot of goals.Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}

      <ul>
        {goals.map((item) => {
          const { id, title, description } = item;

          return (
            <li key={id}>
              <CourseGoal
                id={id}
                title={title}
                description={description}
                onDelete={onDeleteGoal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CourseGoalList;
