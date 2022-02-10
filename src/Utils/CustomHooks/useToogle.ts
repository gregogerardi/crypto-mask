import {useCallback, useState} from "react";

export const useToggle = (initialState = false):
    [boolean, { toggle: () => void, toggleOn: () => void, toggleOff: () => void, }] => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    const toggleOn = useCallback(() => setState(true), []);
    const toggleOff = useCallback(() => setState(false), []);
    return [state, {toggle, toggleOn, toggleOff}]
}
