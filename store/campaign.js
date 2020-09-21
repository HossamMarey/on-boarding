export const state = () => ({
  screenWidth: 0,
  activeCamp: 1,
  start: "yes"
});
//////
export const getters = {
  getScreenWidth(state) {
    return state.screenWidth;
  },
  getactiveCamp(state) {
    return state.activeCamp;
  }
};

////////
export const mutations = {
  CHANGE_SCREEN_WIDTH(state) {
    if (process.client) {
      state.screenWidth = window.innerWidth;
    }
    // console.log(state);
  },
  TO_NEXT(state, payload) {
    state.activeCamp = payload;
  }
};
export const actions = {};
