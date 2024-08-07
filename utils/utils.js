export const doNothing = async (e) => {
  e.preventDefault();

  console.log("do nothing");
};

export const getRandomInt = (ceiling) => {
  return Math.floor(Math.random() * ceiling);
};
