import { LoadMoreBtn, BtnPosition } from "./Button.styled";

export const Button = ({ onClick }) => {
    return (
        <BtnPosition>
            <LoadMoreBtn type="button" onClick={onClick}>Load more</LoadMoreBtn>
        </BtnPosition>
    )
}