import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from) {
    console.log(from.meta.savePosition);

    if (from.meta.savePosition) {
      return;
    }

    return { top: 0 };
  },
} satisfies RouterConfig;
