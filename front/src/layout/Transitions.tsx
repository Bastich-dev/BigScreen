import React, { useState } from "react";
import gsap from "gsap";
import { useRouter } from "next/router";

type Props = {
  children: JSX.Element;
};

export default function Transitions({ children }: Props) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const { pathname } = useRouter();

  React.useEffect(() => {
    gsap.to("main", { opacity: 0, duration: 0.3 });
    setTimeout(() => {
      gsap.to("main", { opacity: 1 });
      setDisplayChildren(children);
    }, 300);
  }, [pathname]);

  return displayChildren;
}
