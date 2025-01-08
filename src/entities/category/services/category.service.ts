import { $category, type CategoryDto } from "../api";

export class CategoryService {
  static getList() {
    return $category<CategoryDto[]>("/");
  }
}
