const initialState = [
  "09:10:00",
  "09:20:00",
  "09:30:00",
]

export default function horseraces(state = initialState, action) {
  if (action.type === "CLOSED") {
    return [...state, action.payload];
  }
  return state;
}
