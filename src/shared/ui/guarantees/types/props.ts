import type { UiGuaranteesStepListItemProps } from "../ui/step-list/item";

type Step = UiGuaranteesStepListItemProps;
type StepList = [Step, Step, Step, Step];

export type UiGuaranteesProps = {
  steps: StepList;
};