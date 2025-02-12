// import { FC } from "react";

// type Goal = {
//   title: string;
//   description: string;
// };

// function CourseGoal(props: Goal) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//       </div>

//       <button>Delete</button>
//     </article>
//   );
// }

// const CourseGoal: FC<Goal> = ({ title, description }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>

//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;

// ---------------------------------------------
import { type FC, type PropsWithChildren, type ReactNode } from "react";

// interface Goal {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

// OR

type Goal = PropsWithChildren<{ title: string; description: string }>;

// function CourseGoal({ title, description, children }: Goal) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>

//       {children}

//       <button>Delete</button>
//     </article>
//   );
// }

// OR

const CourseGoal: FC<Goal> = ({ title, description, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      {children}

      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
