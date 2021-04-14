const changeIndex = {
  inc: (count: number, current: number): number => {
    return current + 1 >= count ? 0 : current + 1;
  },
  dec: (count: number, current: number): number => {
    return current - 1 < 0 ? count - 1 : current - 1;
  },
};

export {changeIndex};
