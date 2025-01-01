import { $faq, type FaqDto } from "../api";

export class FaqService {
  static getRandomList() {
    return $faq<FaqDto[]>(`/random`);
  }
}
