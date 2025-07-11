const customDelimiters = ['-', '..', 'to', '~']

function expandRanges(input) {

  const result = [];
  const ranges = input.split(',').map(part => part.trim()).filter(Boolean);


  for (const part of ranges) {
    const currentDelimiter = customDelimiters.find(delimiter => part.includes(delimiter));
    
    if (part.includes(currentDelimiter)) {
      const [start, end] = part.split(currentDelimiter).map(no => parseInt(no));

      validateRange(start, end);
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      result.push(parseInt(part));
    }
  }

  return result;
}

function validateRange(start, end) {
  if (start > end) {
    throw new Error('Invalid range: Start number cannot be greater than end number');
  }

  if (isNaN(start) || isNaN(end)) {
    throw new Error('Invalid range: Start or end number is not a number');
  }
}
export default expandRanges;