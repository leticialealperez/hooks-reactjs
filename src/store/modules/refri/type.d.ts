interface IRefri {
  marca: string
  quantidade: number
}

interface IActionRefri {
  type: string
  payload: IRefri
}
