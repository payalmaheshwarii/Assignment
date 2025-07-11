function expandRanges(input) {

  const result = [];
  const ranges = input.split(',').map(part => part.trim()).filter(Boolean);

  for (const part of ranges) {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(no => parseInt(no));
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