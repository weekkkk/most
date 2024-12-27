import { $service } from "../api";
import type { GetServiseDataDto } from "../api/types";

export class ServiceService {
  static getData(service: string, subject: string) {
    return $service<GetServiseDataDto>(`/${service}/${subject}.json`);
  }
}
