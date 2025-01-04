import type { UiDeliveryStepListItemProps } from "../ui/step-list/item";

type Step = UiDeliveryStepListItemProps;
type StepList = [Step, Step];

export type UiDeliveryProps = {
  steps: StepList;
};