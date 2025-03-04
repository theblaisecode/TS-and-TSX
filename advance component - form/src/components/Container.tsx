// Polymorphic Components

import { ContainerProps } from "../types/types.tsx";

function Container({ as }: ContainerProps) {
  const Component = as;
  return <Component />;
}

export default Container;
