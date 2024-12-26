import { ServiceService } from "~/components/layout";

export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const service = await ServiceService.getData(
      to.params.service + "",
      to.params.subject + ""
    );

    useState(to.path, () => service);
  } catch (e) {
    return abortNavigation(e + "");
  }
});
