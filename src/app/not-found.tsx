import { NotFoundView } from "@/components/layout/NotFoundView";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Not found",
  "This page seems to have disappeared into the night.",
  "/",
);

export default function NotFound() {
  return <NotFoundView />;
}
