const customDelimiters = ['-', '..', 'to', '~']

function expandRanges(input) {

  const result = [];
  const ranges = input.split(',').map(part => part.trim()).filter(Boolean);


  for (const part of ranges) {
    const currentDelimiter = customDelimiters.find(delimiter => part.includes(delimiter));
    console.log(currentDelimiter);

    if (part.includes(currentDelimiter)) {
      const [start, end] = part.split(currentDelimiter).map(no => parseInt(no));
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      result.push(parseInt(part));
    }
  }

  return result;
}

export default expandRanges;