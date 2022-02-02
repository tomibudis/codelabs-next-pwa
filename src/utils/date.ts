import dayjs from "dayjs";

const DEFAULT_FORMAT = "MM-DD-YYYY";

// List available token format https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens
function dateFormat(date: string, format: string = DEFAULT_FORMAT): string {
  return dayjs(date).format(format);
}

function today(format: string = DEFAULT_FORMAT): string {
  return dayjs().format(format);
}

export { dateFormat, today };
