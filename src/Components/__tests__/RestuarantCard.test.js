import { render,screen } from "@testing-library/react"
import RestuarantCard from "../RestuarantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


// it("should render the resturant card component with props data",()=>{
//     render(<RestuarantCard resData={MOCK_DATA}/>)

//     const Name=screen.getByText("Faasos - Wraps, Rolls & Shawarma");

//     expect(Name).toBeInTheDocument();
// })

it("Should render restuarant card component with promoted label",()=>{
    //HomeWork - test HOC : withPromotedLevel();
})