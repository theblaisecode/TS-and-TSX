import { CourseGoalArr } from "../types/types.tsx";
import CourseGoal from "./CourseGoal.tsx";

type CourseGoalListProp = {
  goals: CourseGoalArr[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProp) {
  return (
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
  );
}

export default CourseGoalList;
