import {atomWithStorage,createJSONStorage} from 'jotai/utils'

export const darkModeAtom = atomWithStorage(
    'darkMode',
    false,
    createJSONStorage(()=>sessionStorage),
)