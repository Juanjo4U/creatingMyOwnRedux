export default ({ setLoader, isLoading }) => {
    console.log("%cIS_LOADING: ", 'font-size: 25px; color: orange;',isLoading);
    if (isLoading) {
        console.log("autoDispatch")
        setLoader(false);
    }
}