export function splitTitle(name: string) {
  const words = name.trim().split(/\s+/);
  if (words.length < 2) return { lead: name, rest: "" };
  return {
    lead: words.slice(0, -1).join(" "),
    rest: words[words.length - 1],
  };
}
