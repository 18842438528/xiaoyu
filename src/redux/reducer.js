const defaultState = {
  newEmail:{
    email:'',
    password:''
  },
  path:'/'
 
}

export default function reducer(preState = defaultState, action) {
  const { type, data } = action;
  switch (type) {
    case 'create':
      preState.newEmail.email= data.email;
      preState.newEmail.password=data.password
      console.log(preState.newEmail)
      break;
    case 'login':
      if(data.email===preState.newEmail.email && data.password===preState.newEmail.password){
        console.log(data.email)
        console.log(data.password)
        defaultState.path='/homepageindex'
        console.log(defaultState.path)
      }else{
        alert('error')
      }
      break;
      default:
        return preState
    }

  return preState
}