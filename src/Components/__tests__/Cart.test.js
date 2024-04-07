import { fireEvent, render, screen } from "@testing-library/react"
import RestuarantMenu from "../RestuarantMenu"
import MOCK_DATA from "../mocks/MockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { act } from "react-dom/test-utils"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch=jest.fn(()=>
    Promise.resolve({
        json : ()=> Promise.resolve(MOCK_DATA),
    })
);

it("Should Load Restuarant Menu Component",async ()=>{
    await act(async () => render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestuarantMenu/>
            <Cart/>
        </Provider>
    </BrowserRouter>));

    const accodianHeader= screen.getByText("Must-Try Winter Delicacies (2)")

    fireEvent.click(accodianHeader)

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    const addBtns = screen.getAllByRole("button" ,{ name: "Add+"})

    expect(screen.getByText("🛒(0)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);

    //Now our header is updated to we need to render our header also here

    expect(screen.getByText("🛒(1)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("🛒(2)")).toBeInTheDocument();

    // After Importing the cart page 

    expect(screen.getAllByTestId("foodItems").length).toBe(4); // this will show failed test case becuase since we included cart and now out item list is reused in cart and so the testid is same 
    //so total testid with name foodItems will be 4
    
    fireEvent.click(screen.getByRole("button" , {name : "Clear Cart"}))

    expect(screen.getAllByTestId("foodItems").length).toBe(2);

    expect(screen.getByText("Cart is empty!! Do more Shopping")).toBeInTheDocument();
})