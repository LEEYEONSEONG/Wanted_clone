export const UserLogin = () => {
  return {
    type: 'USER_LOGGED',
  };
};

export const UserLogOut = () => {
  return {
    type: 'USER_LOGOUT',
  };
};

export const UserSearchInput = (input) => {
  return {
    type: 'USER_SEARCH_INPUT',
    payload: input,
  };
};

export const SearchedData = (data) => {
  return {
    type: 'SEARCHED_DATA',
    payload: data,
  };
};

export const RecruitList = (data) => {
  return {
    type: 'RECRUIT_DATA',
    payload: data,
  };
};
