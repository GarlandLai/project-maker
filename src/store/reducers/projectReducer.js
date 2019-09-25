const initState = {
  projects: [
    {id: '1', title: "Test1", content: "123456789"},
    {id: '2', title: "Test2", content: "123456789"},
    {id: '3', title: "Test3", content: "123456789"}   
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
  case 'CREATE_PROJECT':
    console.log('created project', action.project)
    return state;
  case 'CREATE_PROJECT_ERROR':
    console.log('create project error', action.err);
    return state;
  default:
    return state;
  }
}

export default projectReducer;