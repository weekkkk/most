import type { LayoutProcessStepProps } from "../step-list/item";

type Step = Omit<LayoutProcessStepProps, "right" | "left">;
type StepList = [Step, Step, Step, Step, Step];

export type LayoutProcessProps = {
  title: string;
  image: string;
  startSteps: StepList;
  endSteps: StepList;
};
