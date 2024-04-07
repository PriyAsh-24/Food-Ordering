import sum from "../sum";

test("To check the sum of two numbers",()=>{
    const result=sum(3,4);

    //Assertion
    expect(result).toBe(7);

    //Now running npm run test will give wether pass or fail
});