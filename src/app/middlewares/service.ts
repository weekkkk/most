export default defineNuxtRouteMiddleware(async (to) => {
  try {
    const service = await ServicePageService.getData(
      to.params.service + "",
      to.params.subject + ""
    );
    useState(to.path, () => service);
  } catch (e) {
    return abortNavigation(e + "");
  }
});
