import { $servicesList } from "../api";

export class PriceListService {
  static getPriceList(categoryId: string, search: string) {
    const params = new URLSearchParams();
    if (search) {
      params.append('nameFilter', search);
    }

    return $servicesList(`/${categoryId}/services?${params.toString()}`, {
      method: "GET",
    });
  }
}
