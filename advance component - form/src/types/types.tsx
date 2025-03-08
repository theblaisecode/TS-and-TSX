import {
  type ElementType,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from "react";

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
export type ContainerProps<T extends ElementType> = {
  as: T; // Required, not optional
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
