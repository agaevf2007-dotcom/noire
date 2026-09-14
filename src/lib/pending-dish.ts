export type PendingDish = {
  slug: string;
  src: string;
  rect: { left: number; top: number; width: number; height: number };
};

let pending: PendingDish | null = null;

export function setPendingDish(next: PendingDish) {
  pending = next;
}

export function takePendingDish(slug: string): PendingDish | null {
  if (pending?.slug !== slug) return null;
  const value = pending;
  pending = null;
  return value;
}
