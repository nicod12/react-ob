import { useState } from 'react';

const useList = (initialValue = []) => {

    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    }

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index))
    }

    // List is empty ? true / false
    const isEmpty = () => value.length === 0;

    // List Remove all
    const clear = () => {
        setValue([])
    }

    // List sort
    const sortList = () => {
        setValue((oldValue) => oldValue.sort((a, b) => (a > b ? -1 : 1)));
    }

    // List reverse
    const reverse = () => {
        setValue((oldValue) => oldValue.reverse());
    }

    //TODO:Develop more functions for lists

    return { value, setValue, push, remove, isEmpty, clear, sortList, reverse }
}

export default useList;