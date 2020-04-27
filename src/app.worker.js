
export default () => {
    self.addEventListener('message', e => {
        if (!e) return;
        let reduxState = e.data;
        // localStorage.setItem("persistedReduxState", reduxState)
        console.log("New Redux state tree saved")
        postMessage("Success");
    })
}
