export function add(numbers: string): number {
  if (!numbers) return 0;

  // Use regex to split by comma or newline
  const parts = numbers.split(/[\n,]/);
  const nums = parts.map(num => parseInt(num.trim(), 10));

  return nums.reduce((sum, curr) => sum + curr, 0);
}