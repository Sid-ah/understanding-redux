export default (state, action) => {

  console.log(`action is ${JSON.stringify(action, null, 2)}`)
  switch (action.type) {
    case 'SET_TECHNOLOGY':
      return {
        ...state,
        tech: action.text
      }
    default:
      return state
  }
} 