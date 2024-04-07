import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render the login button in header Component" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

        // const loginButton= screen.getByRole("button");

        // const loginButton= screen.getByText("Login") //Not that good way

        const loginButton= screen.getByRole("button",{name : "Login"}); 



        expect(loginButton).toBeInTheDocument();
})

it("Should render the Cart 0 items in header Component" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

        const loginButton= screen.getByText("🛒(0)"); 

        expect(loginButton).toBeInTheDocument();
})

it("Should render the Cart in header Component" ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

        const loginButton= screen.getByText(/🛒/); // REjux (dont need to pass the full string)

        expect(loginButton).toBeInTheDocument();
})

it("Should change login to logout " ,()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>)

        const loginButton= screen.getByRole("button",{name : "Login"}); 

        fireEvent.click(loginButton);

        const logoutButton= screen.getByRole("button", {name: "Logout"});

        expect(logoutButton).toBeInTheDocument();
})