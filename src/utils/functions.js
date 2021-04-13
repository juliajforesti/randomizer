export function createPairs(arr){
  return arr.reduce((acc, cv, idx, arr) => {
    if (idx % 2 === 0)
      acc.push(arr.slice(idx, idx + 2));
    return acc;
  }, [])
}