import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../services/api'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.items.find((p) => p.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(produto)
      }
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
