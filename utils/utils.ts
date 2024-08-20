export const doNothing = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();

  console.log("do nothing");
};

export const getRandomInt = (ceiling: number): number => {
  return Math.floor(Math.random() * ceiling);
};
