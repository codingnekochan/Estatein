export const heroInfo = {
  hidden: { x: -300 },
  show: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
      ease: "easeIn",
    },
  },
};
export const heroImage = {
  hidden: { x: 300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
      ease: "easeIn",
    },
  },
};
