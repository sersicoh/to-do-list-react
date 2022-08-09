import { Wrapper } from "./styled";
import FormInput from "../../FormInput"
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";

export default () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            searchQueryParamName: searchQueryParamName,
            content: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <FormInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};