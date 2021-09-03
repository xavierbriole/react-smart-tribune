interface CustomWindow extends Window {
  addEventListener: (event: string, listener: (event: any) => void) => void
}

interface Filters {
  thematics: Array<string>
  tags: Array<string>
  tagsOr: Array<string>
}

interface CustomVariables {
  [key: string]: string
}

interface Entrypoint {
  type: string
  value: string
}
