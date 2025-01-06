import { $category } from "../api";
import type { GetCategoryDataDto } from "../api/types";

export class CategoryServices {
  static getCategory(): Promise<GetCategoryDataDto[]> {
    return $category("/api/Category", {
      method: "GET",
    });
  }
}
