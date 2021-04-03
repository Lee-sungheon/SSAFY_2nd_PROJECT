// import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { takeLatest, put, takeEvery, call } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";

const INITIALIZE = 'user/INITIALIZE';
const SET_USER = 'user/SET_USER';
const TEMP_SET_USER = "user/TEMP_SET_USER"; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  "user/CHECK"
);
const LOGOUT = "user/LOGOUT";

export const setUser = createAction(SET_USER, (user) => user);
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

export function* setUserSaga() {
  yield takeEvery(SET_USER, setUser);
}

const checkSaga = createRequestSaga(CHECK, authAPI.check);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

export function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('user');
  } catch(e) {
    console.log(e);
  }
}

const initialState = {
  user: null,
  // user: {
  //   userId: '내가바로아이디',
  //   userName: '내가바로이름',
  // },
  checkError: null,
};

const user = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: state => ({
      ...state,
      user: null,
    }),
  },
  initialState
);

export default user;