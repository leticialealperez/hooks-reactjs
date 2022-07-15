interface IActionUsers {
  type: string
  payload: any[]
}

interface IStateUsers {
  loading: boolean
  users: any[]
  error: string
}
