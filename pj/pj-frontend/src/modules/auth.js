import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga,{createRequestActionTypes} from "../lib/createRequestSaga";
import * as authAPI from '../lib/api/auth';

const CHANGE_FILED = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILEURE = 'auth/REGISTER_FAILURE';

// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS  = 'auth/LOGIN_SUCCESS ';
// const LOGIN_FAILEURE = 'auth/LOGIN_FAILEURE';

const [REGISTER,REGISTER_SUCCESS,REGISTER_FAILURE] = createRequestActionTypes( 'auth/REGISTER');
const [LOGIN,LOGIN_SUCCESS,LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
    CHANGE_FILED,
    ({ form, key, value}) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);


export const register = createAction(REGISTER, ({username,password}) => ({
    username,
    password,
}));

export const login = createAction(LOGIN, ({username,password}) => ({
    username,
    password,
}))

//사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}




const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',

    },
    login: {
        username: '',
        password: '',

    },
    auth: null,
    authError: null,
};



const auth = handleActions(
    {
        [CHANGE_FILED]: (state, { payload: {form,key,value}}) =>
        produce(state, draft => {
            draft[form][key] = value; // ex) state.register.username을 변경
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
            authError: null, // 폼 전환 시 회원 인증 에러 초기화
        }),
        //회원가입 성공
        [REGISTER_SUCCESS]: (state, {payload : auth }) => ({
            ...state,
            authError:null,
            auth,
        }),
        //회원가입 실패
        [REGISTER_FAILURE]: (state,{payload: error}) => ({
            ...state,
            authError: error,
        }),
        //로그인 성공
        [LOGIN_SUCCESS]: (state, {payload : auth}) => ({
            ...state,
            authError:null,
            auth,
        }),
        //로그인 실패
        [LOGIN_FAILURE]: (state,{payload:error}) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;