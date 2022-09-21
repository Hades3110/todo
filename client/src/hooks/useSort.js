import {useState} from "react";

const useSort = (list) => {
    const [prop, setProp] = useState('username');

    const onChangeProp = (prop) => {
        setProp(prop)
    }

    const sortedList = list.sort((a,b) => {
        console.log()
        return (a[prop] > b[prop]) ? 1 : -1
    });
    console.log(sortedList)
    console.log(list)
    console.log(prop)
    return {
        prop,
        onChangeProp,
        sortedList,
    }
}

export default useSort
