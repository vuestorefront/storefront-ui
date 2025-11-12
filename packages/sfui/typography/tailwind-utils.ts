/**
 * All of these functions are taken from Tailwind CSS source code.
 * We copied them over, because tailwindcss is not exporting them from the package nor provides working typings for them.
 */

// taken from https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/compat/apply-config-to-theme.ts#L152
const IS_VALID_KEY = /^[a-zA-Z0-9-_%/\.]+$/

export function keyPathToCssProperty(path: string[]) {
  // The legacy container component config should not be included in the Theme
  if (path[0] === 'container') return null

  path = path.slice()

  if (path[0] === 'animation') path[0] = 'animate'
  if (path[0] === 'aspectRatio') path[0] = 'aspect'
  if (path[0] === 'borderRadius') path[0] = 'radius'
  if (path[0] === 'boxShadow') path[0] = 'shadow'
  if (path[0] === 'colors') path[0] = 'color'
  if (path[0] === 'containers') path[0] = 'container'
  if (path[0] === 'fontFamily') path[0] = 'font'
  if (path[0] === 'fontSize') path[0] = 'text'
  if (path[0] === 'letterSpacing') path[0] = 'tracking'
  if (path[0] === 'lineHeight') path[0] = 'leading'
  if (path[0] === 'maxWidth') path[0] = 'container'
  if (path[0] === 'screens') path[0] = 'breakpoint'
  if (path[0] === 'transitionTimingFunction') path[0] = 'ease'

  for (let part of path) {
    if (!IS_VALID_KEY.test(part)) return null
  }

  return (
    path
      // [1] should move into the nested object tuple. To create the CSS variable
      // name for this, we replace it with an empty string that will result in two
      // subsequent dashes when joined.
      //
      // E.g.:
      // - `fontSize.xs.1.lineHeight` -> `font-size-xs--line-height`
      // - `spacing.1` -> `--spacing-1`
      .map((path, idx, all) => (path === '1' && idx !== all.length - 1 ? '' : path))

      // Resolve the key path to a CSS variable segment
      .map((part) =>
        part
          .replaceAll('.', '_')
          .replace(/([a-z])([A-Z])/g, (_, a, b) => `${a}-${b.toLowerCase()}`),
      )

      // Remove the `DEFAULT` key at the end of a path
      // We're reading from CSS anyway so it'll be a string
      .filter((part, index) => part !== 'DEFAULT' || index !== path.length - 1)
      .join('-')
  )
}

// taken from https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/utils/segment.ts

const BACKSLASH = 0x5c
const OPEN_CURLY = 0x7b
const CLOSE_CURLY = 0x7d
const OPEN_PAREN = 0x28
const CLOSE_PAREN = 0x29
const OPEN_BRACKET = 0x5b
const CLOSE_BRACKET = 0x5d
const DOUBLE_QUOTE = 0x22
const SINGLE_QUOTE = 0x27

// This is a shared buffer that is used to keep track of the current nesting level
// of parens, brackets, and braces. It is used to determine if a character is at
// the top-level of a string. This is a performance optimization to avoid memory
// allocations on every call to `segment`.
const closingBracketStack = new Uint8Array(256)

/**
 * This splits a string on a top-level character.
 *
 * Regex doesn't support recursion (at least not the JS-flavored version),
 * so we have to use a tiny state machine to keep track of paren placement.
 *
 * Expected behavior using commas:
 * var(--a, 0 0 1px rgb(0, 0, 0)), 0 0 1px rgb(0, 0, 0)
 *        ┬              ┬  ┬    ┬
 *        x              x  x    ╰──────── Split because top-level
 *        ╰──────────────┴──┴───────────── Ignored b/c inside >= 1 levels of parens
 */
function segment(input: string, separator: string) {
  // SAFETY: We can use an index into a shared buffer because this function is
  // synchronous, non-recursive, and runs in a single-threaded environment.
  let stackPos = 0
  let parts: string[] = []
  let lastPos = 0
  let len = input.length

  let separatorCode = separator.charCodeAt(0)

  for (let idx = 0; idx < len; idx++) {
    let char = input.charCodeAt(idx)

    if (stackPos === 0 && char === separatorCode) {
      parts.push(input.slice(lastPos, idx))
      lastPos = idx + 1
      continue
    }

    switch (char) {
      case BACKSLASH:
        // The next character is escaped, so we skip it.
        idx += 1
        break
      // Strings should be handled as-is until the end of the string. No need to
      // worry about balancing parens, brackets, or curlies inside a string.
      case SINGLE_QUOTE:
      case DOUBLE_QUOTE:
        // Ensure we don't go out of bounds.
        while (++idx < len) {
          let nextChar = input.charCodeAt(idx)

          // The next character is escaped, so we skip it.
          if (nextChar === BACKSLASH) {
            idx += 1
            continue
          }

          if (nextChar === char) {
            break
          }
        }
        break
      case OPEN_PAREN:
        closingBracketStack[stackPos] = CLOSE_PAREN
        stackPos++
        break
      case OPEN_BRACKET:
        closingBracketStack[stackPos] = CLOSE_BRACKET
        stackPos++
        break
      case OPEN_CURLY:
        closingBracketStack[stackPos] = CLOSE_CURLY
        stackPos++
        break
      case CLOSE_BRACKET:
      case CLOSE_CURLY:
      case CLOSE_PAREN:
        if (stackPos > 0 && char === closingBracketStack[stackPos - 1]) {
          // SAFETY: The buffer does not need to be mutated because the stack is
          // only ever read from or written to its current position. Its current
          // position is only ever incremented after writing to it. Meaning that
          // the buffer can be dirty for the next use and still be correct since
          // reading/writing always starts at position `0`.
          stackPos--
        }
        break
    }
  }

  parts.push(input.slice(lastPos))

  return parts
}

// taken from https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/src/utils/to-key-path.ts
/**
 * Parse a path string into an array of path segments
 *
 * Square bracket notation `a[b]` may be used to "escape" dots that would
 * otherwise be interpreted as path separators.
 *
 * Example:
 * a -> ['a']
 * a.b.c -> ['a', 'b', 'c']
 * a[b].c -> ['a', 'b', 'c']
 * a[b.c].e.f -> ['a', 'b.c', 'e', 'f']
 * a[b][c][d] -> ['a', 'b', 'c', 'd']
 *
 * @param {string} path
 **/
export function toKeyPath(path: string) {
  let keypath: string[] = []

  for (let part of segment(path, '.')) {
    if (!part.includes('[')) {
      keypath.push(part)
      continue
    }

    let currentIndex = 0

    while (true) {
      let bracketL = part.indexOf('[', currentIndex)
      let bracketR = part.indexOf(']', bracketL)

      if (bracketL === -1 || bracketR === -1) {
        break
      }

      // Add the part before the bracket as a key
      if (bracketL > currentIndex) {
        keypath.push(part.slice(currentIndex, bracketL))
      }

      // Add the part inside the bracket as a key
      keypath.push(part.slice(bracketL + 1, bracketR))
      currentIndex = bracketR + 1
    }

    // Add the part after the last bracket as a key
    if (currentIndex <= part.length - 1) {
      keypath.push(part.slice(currentIndex))
    }
  }

  return keypath
}