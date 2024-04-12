const translateReferrer = (referrer: string): string => {
  if (referrer.includes("t.co")) {
    return "https://x.com";
  }

  return referrer;
};

export function getOrigin(query: string): string {
  const origin = query.split("&").find((q) => q.startsWith("o="));

  switch (origin) {
    case "x":
      return "https://x.com";
    default:
      return translateReferrer(document.referrer);
  }
}
