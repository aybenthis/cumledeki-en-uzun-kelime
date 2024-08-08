function getLongestWord(cumle) {
  const words = cumle.split(' ');
  let maxUzunluk = 0;
  let enUzunKelime = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxUzunluk) {
      maxUzunluk = words[i].length;
      enUzunKelime = words[i];
    }
  }
  return enUzunKelime;
}
