export const pageVariant = {
  initial: { y: "100px", opacity: 0, scale: 1.2 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: "-100px", opacity: 0, scale: 0.8 },
};

export const revPageVariant = {
  initial: { y: "-100px", opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: "100px", opacity: 0, scale: 1.2 },
};
export const pageTransition = {
  type: "tween",
};
