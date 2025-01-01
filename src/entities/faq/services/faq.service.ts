import { $faq, type FaqDto } from "../api";

export class FaqService {
  static getRandomList() {
    return $faq<FaqDto[]>(`/random`);
  }

  static getAll() {
    return $faq<FaqDto[]>(`/all`);
  }

  // static create() {
  //   return $faq<FaqDto[]>(`/all`);
  // }

  // static update() {
  //   return $faq<FaqDto[]>(`/all`);
  // }

  // static delete() {
  //   return $faq<FaqDto[]>(`/all`);
  // }
}
