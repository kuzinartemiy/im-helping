export const hideNumber: any = (string: string, replaceTo = '*', elemsHide = 6, sliceFromback = 1) => {
  const result = string.match(/^(\(?\+?\d{1,2}\)? ?\(?\d{1,3}\)? ?\d+-? ?\d+-? ?\d+)$/);
  if (result !== null) {
    // тут мы выдергиваем n элементов после среза x
    const regex = new RegExp(`((\\(?\\ ?\\-?\\d\\ ?\\-?\\)?){${elemsHide}})((\\ ?\\-?\\d\\ ?\\-?){${sliceFromback}}$)`, 'gm');
    let m;
    // eslint-disable-next-line no-unreachable-loop
    while ((m = regex.exec(string)) !== null) {
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      const forRex = m[1];
      const str = m[1].replace(/(\d)/gm, replaceTo);
      const lasts = m[3];
      const full = string;
      const noBack = full.slice(0, -lasts.length).slice(0, -forRex.length);
      const out = noBack + '' + str + '' + lasts;
      return out;
    }
    return string;
  } else {
    return string;
  }
};
