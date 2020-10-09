import React, { useState } from "react";
import {
  pageVariant,
  pageTransition,
  revPageVariant,
} from "../components/_pageAnimations";
import { changeRoute } from "../helpers/scrollEvent";

const Wrapper = (Component) =>
  function Comp(props) {
    const [variant, setVariant] = useState(undefined || revPageVariant);
    const changeOnScroll = (e) => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        e.deltaY > 0
      ) {
        setVariant(pageVariant);
        changeRoute(props.history, props.next);
      } else if (window.scrollY === 0 && window.scrollX === 0 && e.deltaY < 0) {
        setVariant(revPageVariant);
        changeRoute(props.history, props.prev);
      }
    };
    React.useEffect(() => {
      ["scroll", "wheel"].forEach((evt) =>
        window.addEventListener(evt, changeOnScroll),
      );

      return () => {
        ["scroll", "wheel"].forEach((evt) =>
          window.removeEventListener(evt, changeOnScroll),
        );
      };
      // eslint-disable-next-line
    }, []);
    return (
      <Component {...props} variant={variant} pageTransition={pageTransition} />
    );
  };

export default Wrapper;
