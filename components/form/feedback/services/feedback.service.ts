import { $service } from "../api";
import type { FeedbackModal } from "../api/types";

export class FeedbackService {
  static postUserData(response: FeedbackModal) {
    return $service(response);
  }
}
