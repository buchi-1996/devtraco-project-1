const reducerfunc = (state, action) => {
    switch (action.type) {
      case "IS_MOBILE_OPEN":
        return {
          ...state,
          isMobileOpen: !state.isMobileOpen,
        };
      default:
        return state;
    }
  };
  
  export default reducerfunc;