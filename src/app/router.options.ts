import type { RouterConfig } from "@nuxt/schema";

export default {
  scrollBehavior(to, from) {
    if (from.meta.savePosition) {
      return;
    }
    if (to.hash) {
      if (from.path === to.path)
        return {
          el: to.hash,
          behavior: "smooth",
        };
      return new Promise((resolve) => {
        const id = to.hash.replace("#", "");
        const observer = new MutationObserver(() => {
          const element = document.getElementById(id);
          if (element) {
            console.log(element);
            observer.disconnect(); // Останавливаем наблюдение
            resolve({
              el: to.hash,
              behavior: "instant",
            });
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      });
    }

    return { top: 0 };
  },
} satisfies RouterConfig;
