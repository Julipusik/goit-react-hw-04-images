import { styled } from "styled-components";

export const SearchBarContainer = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #4F2EE8;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchBarForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
`

export const SearchBtn = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 2px solid #EAC645;
    border-radius: 12px;
    background-color: white;
    cursor: pointer;
    outline: none;

    &:hover {
    background-color: #EAC645;
    }
`

export const SearchInput = styled.input`
    display: inline-block;
    width: 100%;
    height: 46px;
    font: inherit;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 8px;
`