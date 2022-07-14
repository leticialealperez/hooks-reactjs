interface IBauru {
  sabor: string
  quantidade: number
}

interface IAction {
  type: string
  payload: IBauru
}
