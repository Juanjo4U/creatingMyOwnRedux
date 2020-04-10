export default ({ name, greet, setGreeting }) => {
    console.log('%cComponentState: ', 'font-size: 25px; color: orange;', 'name: ', name, ' greet: ', greet)
    console.log('*******************************************************************')
    const changeGreet = greet => setGreeting(greet)
    return { changeGreet }
}