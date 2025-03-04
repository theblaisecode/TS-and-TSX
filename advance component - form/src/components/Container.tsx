// Polymorphic Components

import { type ElementType } from "react";
import { ContainerProps } from "../types/types.tsx";

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";

  return (
    <Component className="container" {...props}>
      {children}
    </Component>
  );
}

export default Container;
