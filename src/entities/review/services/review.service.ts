import { $review, type ReviewDto } from "../api";

export class ReviewService {
  static getList() {
    return $review<ReviewDto[]>(`/`);
  }
}
