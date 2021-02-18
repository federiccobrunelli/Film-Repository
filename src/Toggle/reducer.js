const initialState = {
  messageVisibility: false,
};

export default function (state = initialState, action) {
  const { type } = action; // type === action.type

  switch (type) {
    case 'TOGGLE_MESSAGE':
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };

    default:
      return state
  }

}