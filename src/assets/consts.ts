export const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 500) + 1;
  return randomNumber.toString();
}
