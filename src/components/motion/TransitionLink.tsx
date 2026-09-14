"use client";

import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";

type TransitionLinkProps = ComponentProps<typeof Link>;

export const TransitionLink = forwardRef<HTMLAnchorElement, TransitionLinkProps>(
  function TransitionLink({ href, children, ...rest }, ref) {
    return (
      <Link ref={ref} href={href} {...rest}>
        {children}
      </Link>
    );
  },
);
