import type { UiProcessStepListItemProps } from "../step-list/item";

type Step = Omit<UiProcessStepListItemProps, "right" | "left">;
type StepList = [Step, Step, Step, Step, Step];

export type UiProcessProps = {
  title: string;
  image: string;
  startSteps: StepList;
  endSteps: StepList;
};
