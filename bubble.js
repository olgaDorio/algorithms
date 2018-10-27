const bubbleSort = (array=[]) => {
  const _array = array.slice();

  for (let i = 0; i<_array.length; i++) {
    for (let j=0;j<_array.length; j++) {
      if (_array[i] < _array[j]) {
        [_array[i], _array[j]] = [_array[j], _array[i]];
      }
    }
  }

  return _array;
}

const arr = Array.from({length: 100}, () => Math.round(-500 + Math.random() * 1000));

console.log('initial: ', arr)
console.log('sorted: ', bubbleSort(arr));
