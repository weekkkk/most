import { $feedback } from "../api";
import type { FeedbackDataDto } from "../api/types";

export class Feedback {
  static sendFeedbackForm = async (req: FeedbackDataDto) => {
    const convertToFormData = new FormData();
    convertToFormData.append("Name", req.Name);
    convertToFormData.append("Phone", req.Phone);
    
    return await $feedback("/", {
      method: "POST",
      body: convertToFormData,
    });
  };
}
