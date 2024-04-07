import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import Body from "../Body"
import MOCK_DATA from "../mocks/MockResListData.json" 
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    });
})

it("Should Search ResList for pizza text input", async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const CardsBefore=screen.getAllByTestId("resCard");

    expect(CardsBefore.length).toBe(20);

    const searchBtn= screen.getByRole("button",{ name : "Search"});

    const searchInput=screen.getByTestId("searchInput"); // we will write a test id in our main code 

    fireEvent.change(searchInput,{target : {value: 'pizza'}})

    fireEvent.click(searchBtn);

    const cardsAfterSearch=screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(2);
    
})

it("Should Filter Top rated restuarants",async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardsBefore=screen.getAllByTestId("resCard");

    expect(cardsBefore.length).toBe(20);

    const FilterButton=screen.getByRole("button" ,{name: "Filter Top Restuarants"})

    fireEvent.click(FilterButton)

    const cardsAfterFilter=screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(17)

})