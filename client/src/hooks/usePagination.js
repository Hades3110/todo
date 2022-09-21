import {useMemo, useState} from "react";

const usePagination = (itemCount) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemCountInOnePage = 4;

    const pageCount = Math.ceil(itemCount / itemCountInOnePage);

    const range = useMemo(() => {
        const from = (currentPage - 1) * itemCountInOnePage;
        const to = from + itemCountInOnePage;
        return [from, to]
    }, [currentPage])

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return{
        changePage,
        pageCount,
        range,
        itemCountInOnePage
    }
}

export default usePagination;
