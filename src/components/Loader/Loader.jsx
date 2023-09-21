import { ThreeDots } from "react-loader-spinner";
import { LoaderPosition } from "./Loader.styled";

export const Loader = () => {
    return (
        <LoaderPosition>
        <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4F2EE8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
        </LoaderPosition>
    )
}