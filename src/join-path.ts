import * as path from 'path'

export function joinPath(components: string | string[]): string {
  if (Array.isArray(components)) {
    return path.join(...components)
  } else {
    return components
  }
}
