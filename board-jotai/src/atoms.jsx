import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const initUser = {
    id: '',
    name: '',
    nickname: '',
    email: '',
    address: '',
    detailAddress: ''
}

export const userAtom = atomWithStorage("user",initUser,createJSONStorage(()=>sessionStorage));