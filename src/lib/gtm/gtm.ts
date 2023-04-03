type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const pageview = (url: string) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
