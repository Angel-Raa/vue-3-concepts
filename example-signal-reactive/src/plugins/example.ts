export default {
    install:( app, option) => {
        app.config.globalProperties.$count = () => 0;
        app.config.globalProperties.$sayHello = () => console.log("hello")
        app.config.globalProperties.$sayHi = () => alert(option.msg)
        app.config.globalProperties.$sayBye = () => alert("bye")
    }
}