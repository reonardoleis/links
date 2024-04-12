export function getOrigin(query: string): string {
  const origin = query.split("&").find((q) => q.startsWith("o="));

  switch (origin) {
    case "x":
      return "https://x.com";
    default:
      return document.referrer;
  }
}
