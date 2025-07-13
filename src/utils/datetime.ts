import dayjs from "dayjs"

export function formatDate(timestamp: number): string {
  return dayjs(timestamp).format("YYYY-MM-DD")
}

export function formatTime(
  timestamp: number,
  { includeSeconds }: { includeSeconds?: boolean } = {}
): string {
  return dayjs(timestamp).format(includeSeconds ? "HH:mm:ss" : "HH:mm")
}
