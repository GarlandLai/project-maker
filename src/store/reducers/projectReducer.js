const initState = {
  projects: [
    {id: '1', title: "Test1", content: "123456789"},
    {id: '2', title: "Test2", content: "123456789"},
    {id: '3', title: "Test3", content: "123456789"}   
  ]
}

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer;