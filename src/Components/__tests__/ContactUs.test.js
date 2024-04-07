import { render, screen } from "@testing-library/react"
import { ContactUs } from "../ContactUs"
import "@testing-library/jest-dom"

test("Should have heading component on our contact us page",()=>{
    render(<ContactUs/>)

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

it("Should have button component on our contact us page",()=>{
    render(<ContactUs/>);

    //Querying
    const button = screen.getByRole("button");

    //assertion
    expect(button).toBeInTheDocument();
})

describe("Contact us page Tests",()=>{
    beforeAll(()=>{
        console.log("Before ALL");
    })

    afterAll(()=>{
        console.log("after ALL");
    })

    beforeEach(()=>{
        console.log("Before Each");
    })

    afterEach(()=>{
        console.log("After Each");
    })



    test("Should have placeholder name component on our contact us page",()=>{
        render(<ContactUs/>);
    
        //Querying
        const inputName= screen.getByPlaceholderText("Name");
    
        //assertion
        expect(inputName).toBeInTheDocument();
    })
    
    test("To have all inputboxes",()=>{
        render(<ContactUs/>)
    
        //Querying
        const inputboxes=screen.getAllByRole("textbox");
    
        // console.log(inputboxes); // it returns a array which is our jsx element or virtual dom react element 
        // console.log(inputboxes.length);
    
        //Assertion
        // expect(inputboxes.length).toBe(3);
        //or
        expect(inputboxes.length).not.toBe(3);
    })
})

