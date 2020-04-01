export default ({ name, myAction }) => {
    console.log('%cComponentState: ', 'font-size: 25px; color: lightblue;', name)
    console.log('ComponentActions: ', myAction)
    console.log('*******************************************************************')
    const changeName = name => myAction(name)
    return { changeName }
}