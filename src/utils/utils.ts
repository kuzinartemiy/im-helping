export const formatDate = (time: number) => {
  const day = new Date(time).getDate();
  const month = new Date(time).getMonth() + 1;
  const year = new Date(time).getFullYear().toString().split('').splice(2).join('');
  return `${day}.${month}.${year}`;
};
