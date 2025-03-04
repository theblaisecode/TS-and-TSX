import { ElementType, type ComponentPropsWithoutRef } from "react";

export type InputProps = {
  label: string;
  name: string;
  type: string;
} & ComponentPropsWithoutRef<"input">;

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
};

export type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  href?: string;
};

// Polymorphic Components
export type ContainerProps = {
  as: ElementType;
};
