const initstate = {
  candidates: {
    Y19: [
      { id: 1, name: "abc", multi:true },
      { id: 2, name: "abc", multi:true },
      { id: 3, name: "abc", multi:true },
      { id: 4, name: "abc", multi:true },
      { id: 5, name: "abc", multi:true },
    ],
    // Y18: [
    //   { id: 1, name: "bbc", multi:false },
    //   { id: 2, name: "bbc", multi:false },
    //   { id: 3, name: "bbc", multi:false },
    //   { id: 4, name: "bbc", multi:false },
    //   { id: 5, name: "bbc", multi:false },
    // ],
  },
};
const candidate = (state = initstate, action) => {
  return state;
};
export default candidate;
