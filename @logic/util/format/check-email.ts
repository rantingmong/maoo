export default (input: string | null): boolean => {
  return input && input.length && (input.match(/(\S+)@(\w+.?)+/) || []).length > 0
}
