import type { UiProcessStepListItemProps } from "../ui/step-list/ui/item/types";

type Step = Omit<UiProcessStepListItemProps, "right" | "left">;
type StepList = [Step, Step, Step, Step, Step];

export type UiProcessProps = {
  title: string;
  mdTitle: string;
  image: string;
  startSteps: StepList;
  endSteps: StepList;
  noFooter?: boolean;
};
