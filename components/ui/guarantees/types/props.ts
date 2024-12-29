import type { UiGuaranteesStepListItemProps } from "../step-list/item";

type Step = UiGuaranteesStepListItemProps;
type StepList = [Step, Step, Step, Step];

export type UiGuaranteesProps = {
  title: string;
  image: string;
  steps: StepList;
};
