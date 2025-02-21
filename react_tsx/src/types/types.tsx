export type CourseGoalArr = {
  id: number;
  title: string;
  description: string;
};

export type NewGoalProp = {
  onAddGoal: (goal: string, summary: string) => void;
};
