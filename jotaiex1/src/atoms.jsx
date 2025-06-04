import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const countAtom = atomWithStorage('count',0,createJSONStorage(()=>sessionStorage));
export const accAtom = atomWithStorage('acc',{id:'1001',name:'홍길동',balance:100000},createJSONStorage(()=>sessionStorage()));