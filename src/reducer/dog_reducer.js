const dogReducer = (state = [], action) => {
  switch(action.type) {
    case 'DOG_DATA':
      return [...state, action.dogData];
    case 'ERROR':
    return 'Image not found'  
    default:
      return state
  }
}

export default dogReducer;
