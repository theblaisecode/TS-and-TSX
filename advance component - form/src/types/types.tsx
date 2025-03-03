import { type ComponentPropsWithoutRef } from "react";

export type InputProps = {
  label: string;
  name: string;
  type: string;
} & ComponentPropsWithoutRef<"input">;

export type ButtonProps = {
  element: "button";
} & ComponentPropsWithoutRef<"button">;

export type AnchorProps = {
  element: "anchor";
} & ComponentPropsWithoutRef<"a">;
