browser.webRequest.onBeforeRequest.addListener(
  requestDetails => {
    return {
      redirectUrl:
        "https://www.arxiv-vanity.com/convert/?query=" +
        encodeURIComponent(requestDetails.url)
    };
  },
  { urls: ["https://arxiv.org/abs/*"] },
  ["blocking"]
);
