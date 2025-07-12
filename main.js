const RANGE_DELIMITERS = ['-', '..', 'to', '~'];


// Utility to split by commas and remove empty parts
function extractTokens(str) {
  return str.split(',').map(s => s.trim()).filter(Boolean);
}

// Finds the first matching delimiter in input
function findDelimiter(str) {
  return RANGE_DELIMITERS.find(delim => str.includes(delim)) || null;
}

//generate range of numbers between start and end using step
function makeRange(start, end, step) {
  const result = [];
  if (start > end && step > 0) step = -step;

  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    result.push(i);
  }

  return result;
}

// validate inputs
function checkInputs(start, end, step) {
  if (isNaN(start) || isNaN(end)) {
    throw new Error("Start or end is not a number");
  }
  if (isNaN(step) || step === 0) {
    throw new Error("Step must be a non-zero number");
  }
}

// Merges only step-1 ranges, logs others
function mergeSimpleRanges(ranges) {
  const valid_ranges = ranges.filter(r => r.step === 1);
  const others = ranges.filter(r => r.step !== 1);

  if (others.length > 0) {
    console.warn("Skipping merge for step ≠ 1 ranges:", others);
  }

  valid_ranges.sort((a, b) => a.start - b.start);

  const merged = [];

  for (const curr of valid_ranges) {
    if (!merged.length) {
      merged.push({ ...curr });
    } else {
      const last = merged[merged.length - 1];
      if (curr.start <= last.end + 1) {
        last.end = Math.max(last.end, curr.end);
      } else {
        merged.push({ ...curr });
      }
    }
  }

  return [...merged, ...others];  // Add unmerged step>1 ranges as-is
}

function main(input) {

  const tokens = extractTokens(input);
  const delimiter = findDelimiter(input);

  const ranges = [];

  for (const token of tokens) {
    if (delimiter && token.includes(delimiter)) {

      const [rangePart, stepPart] = token.split(':').map(t => t.trim());
      const [startStr, endStr] = rangePart.split(delimiter).map(t => t.trim());

      const start = parseInt(startStr);
      const end = parseInt(endStr);
      const step = stepPart ? parseInt(stepPart) : (start <= end ? 1 : -1);

      checkInputs(start, end, step);

      ranges.push({ start, end, step });

    }
    else {
      const num = parseInt(token);
      if (isNaN(num)) throw new Error(`Invalid number: "${token}"`);
      ranges.push({ start: num, end: num, step: 1 });
    }
  }

  const merged = mergeSimpleRanges(ranges);

  let output = [];
  for (const r of merged) {
    output.push(...makeRange(r.start, r.end, r.step));
  }
  return output;
}

export default main;