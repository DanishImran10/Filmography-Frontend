type NavigatePageButtonProps = {
    page: number | string,
    goToPage: (page: number) => void
};

function NavigatePageButton(props: NavigatePageButtonProps) {
    let increment: number;
    if (typeof props.page === "string")
        increment = props.page === "Next" ? 1 : -1;
    else
        increment = props.page;

    return (
        <button className="px-3 py-1 bg-gray-700 rounded hover:bg-blue-600 cursor-pointer" 
            onClick={() => props.goToPage(increment)}>{props.page}</button>
    );
}

export default NavigatePageButton;