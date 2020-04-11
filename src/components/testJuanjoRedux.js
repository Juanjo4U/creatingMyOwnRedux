export default ({ name, password, setName, setPassword }) => {
    console.log('%cComponentState: ', 'font-size: 25px; color: lightblue;', 'name: ', name, ' password: ', password)
    console.log('*******************************************************************')
    const changeName = name => setName(name)
    const changePassword = password => setPassword(password)
    return { changeName, changePassword }
}