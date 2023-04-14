const { Form } = require("react-router-dom")
const { Contacts } = require("./contacts/contacts")
const { FindFilt } = require("./filter/findFiltr")
const { default: Header } = require("./header/header")


const Layout =()=>{
    return (
        <div>
            <header>
                <Header/>
                {/* <Form/>
                <Contacts/>
                <FindFilt/> */}
            </header>
        </div>
    )
}
export default Layout