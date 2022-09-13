const RAND = '/greetings';
const RAND_SUCCESS = '/greetings/SUCCESS';
const RAND_FALURE = '/greetings/FALURE';

export default function reducer(state = '', action = {}) {
  switch (action.type) {
    case RAND_SUCCESS: {
      return `${action.message}`;
    }
    default:
      return state;
  }
}

export const getGreeting = () => (dispatch) => {
  dispatch({ type: RAND });
  return fetch('/greetings').then(
    (request) => request.json().then(({ message }) => dispatch({
      type: RAND_SUCCESS,
      message,
    })),
    (err) => dispatch({ type: RAND_FALURE, err }),
  );
};
