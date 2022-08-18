import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(searchQueryParamName);

};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return ({ searchQueryParamName, content }) => {
        const searchParams = new URLSearchParams(location.search);

        if (content === undefined) {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, content);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
};