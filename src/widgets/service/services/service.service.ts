import { $service_page, type GetServisePageDataDto } from "../api";

export class ServicePageService {
  static getData(
    service: string,
    subject: string
  ): Promise<GetServisePageDataDto> {
    if (process.env.NODE_ENV === "prerender") {
      const content = process.env[`${service}_${subject}.json`];
      if (!content) throw new Error();
      return JSON.parse(content);
    }
    return $service_page<GetServisePageDataDto>(`/${service}/${subject}.json`);
  }
}
