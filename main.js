browser.webRequest.onBeforeRequest.addListener(
  requestDetails => {
    if (
      requestDetails.originUrl !== undefined &&
      requestDetails.originUrl.startsWith("https://www.arxiv-vanity.com")
    ) {
      return;
    } else {
      return {
        redirectUrl:
          "https://www.arxiv-vanity.com/convert/?query=" +
          encodeURIComponent(requestDetails.url)
      };
    }
  },
  { urls: ["https://arxiv.org/abs/*"] },
  ["blocking"]
);
