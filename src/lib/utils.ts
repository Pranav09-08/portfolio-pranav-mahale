export const formatDate = (raw: string): string => {
  const date = new Date(raw);
  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};
