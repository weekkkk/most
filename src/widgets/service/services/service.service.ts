import { $service, type GetServiseDataDto } from "../api";

export class ServiceService {
  static getData(service: string, subject: string) {
    // console.log("test");
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.NODE_ENV === "prerender");
    // console.log(process.env.myData);

    if (process.env.NODE_ENV === "prerender") {
      const content = process.env[`${service}_${subject}.json`];
      if (!content) throw new Error();
      return JSON.parse(content);
    }
    return $service<GetServiseDataDto>(`/${service}/${subject}.json`);
  }
}
