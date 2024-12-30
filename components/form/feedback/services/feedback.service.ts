import { $feedback } from "../api";
import type { FeedbackDataDto } from "../api/types";

export class Feedback {
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
