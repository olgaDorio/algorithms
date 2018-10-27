const bubbleSort = (array=[]) => {
  for (let i = 0; i<array.length; i++) {
    for (let j=0;j<array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

const arr = Array.from({length: 100}, () => Math.round(-500 + Math.random() * 1000));
console.log(bubbleSort(arr));
console.log(arr)
