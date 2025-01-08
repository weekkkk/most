import { $service, type ServiceDto } from "../api";

export class ServiceService {
  static getList(categoryId: string, nameFilter?: string) {
    return $service<ServiceDto[]>(`/${categoryId}/services`, {
      params: {
        nameFilter,
      },
    });
  }
}
