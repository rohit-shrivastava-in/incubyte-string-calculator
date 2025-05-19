export function add(numbers: string): number {
  if (numbers === "") return 0;

  const parts = numbers.split(",");
  const nums = parts.map(n => parseInt(n));
  return nums.reduce((a, b) => a + b, 0);
}