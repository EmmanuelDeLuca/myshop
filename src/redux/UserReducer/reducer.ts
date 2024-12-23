interface User {
  name: String;
  email: String;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

// Reducer: Guarda o estado que vai ser compartilhado na aplicação
// Manipula/altera o estado
interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}
