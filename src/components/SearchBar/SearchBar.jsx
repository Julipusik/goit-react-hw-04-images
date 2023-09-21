import {useState} from "react";
import { SlMagnifier } from "react-icons/sl";
import { SearchBarContainer, SearchBarForm, SearchBtn, SearchInput } from "./SearchBar.styled";

export const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const onSubmit = evt => {
        evt.preventDefault();
        onSearch(searchValue);
    };

    const onChange = evt => {
        setSearchValue(evt.target.value);
    };

    return (
        <SearchBarContainer>
            <SearchBarForm className="form" onSubmit={onSubmit}>
                <SearchBtn type="submit" className="button">
                    <span className="button-label"><SlMagnifier/></span>
                </SearchBtn>

                <SearchInput
                    className="input"
                    onChange={onChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchValue}
                />
            </SearchBarForm>
        </SearchBarContainer>
    )
}