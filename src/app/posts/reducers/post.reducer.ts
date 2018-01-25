import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.ALL;

// Default App State

const defaultState: Post = {
  text: 'Hello. I am the default post',
  likes: 0,
};

// Helper function to create new state object
const newState = (state, newState) => {
  return Object.assign({}, state, newState);
};

// Reducer function
export function postReducer(state: Post = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState(state, { text: action.payload });

    case PostActions.UP_VOTE:
      return newState(state, { likes: state.likes + 1 });

    case PostActions.DOWN_VOTE:
      return newState(state, { likes: state.likes - 1 });

    case PostActions.RESET:
      return defaultState;

    default:
      return state;
  }
}
