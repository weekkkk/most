import { $feedback } from "../api/index";
import type { FeedbackDataDto } from "../api/types";

export class FeedbackService {
  static sendFeedbackForm = async (req: FeedbackDataDto) => {
    const formData = new FormData();
    formData.append("Name", req.Name);
    formData.append("Phone", req.Phone);

    return await $feedback("/", {
      method: "POST",
      body: formData,
    });
  };
}
