import { $servicesList } from "../api";

export class PriceListService {
  static getPriceList(categoryId: string) {
    return $servicesList(`/${categoryId}/services`, {
      method: "GET",
    });
  }
}
