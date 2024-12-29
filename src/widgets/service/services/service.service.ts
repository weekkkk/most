import { $service, type GetServiseDataDto } from "../api";
export class ServiceService {
  static getData(service: string, subject: string) {
    return $service<GetServiseDataDto>(`/${service}/${subject}.json`);
  }
}
