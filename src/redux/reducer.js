const defaultState = {
  newEmail: '',
  email: '',
}

export default function reducer(preState = defaultState, action) {
  const { type, data } = action;
  switch (type) {
    case 'login':
      preState.newEmail = data;
      console.log(preState.newEmail)
  }
  return preState
}