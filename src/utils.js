function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}

function shuffle(arr) {
  const copyArr = [...arr];
  for (let i = 0; i < copyArr.length; i++) {
    const randomNumb = Math.floor(Math.random() * (i + 1));
    let temp = copyArr[i];
    copyArr[i] = copyArr[randomNumb];
    copyArr[randomNumb] = temp;
  }
  return copyArr;
}

export { truncateString, shuffle };
