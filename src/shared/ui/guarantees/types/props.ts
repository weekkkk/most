import type { UiGuaranteesStepListItemProps } from "../ui/step-list/item";

type Step = UiGuaranteesStepListItemProps;
type StepList = Step[];

export type UiGuaranteesProps = {
  steps: StepList;
};
