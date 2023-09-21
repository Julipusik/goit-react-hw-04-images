import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { SearchBarContainer, SearchBarForm, SearchBtn, SearchInput } from "./SearchBar.styled";

export class SearchBar extends React.Component {
    state = {
        searchValue: '',
    };

    onSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state.searchValue);
    }

    onChange = evt => {
        this.setState({ searchValue: evt.target.value });
    }

    render() {
        return (
            <SearchBarContainer>
                <SearchBarForm className="form" onSubmit={this.onSubmit}>
                    <SearchBtn type="submit" className="button">
                        <span className="button-label"><SlMagnifier/></span>
                    </SearchBtn>

                    <SearchInput
                        className="input"
                        onChange={this.onChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchValue}
                    />
                </SearchBarForm>
            </SearchBarContainer>
        )
    }
}