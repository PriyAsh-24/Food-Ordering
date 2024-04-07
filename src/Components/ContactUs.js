export const ContactUs=() =>{
    return (
        <div className="ContactUs">
            <h1 className="font-bold text-3xl p-4 m-2">COntact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-black p-2 m-2 "></input>
                <input type="text" placeholder="MEssage" className="border border-black p-2 m-2 "></input>
                <button className="border border-black p-2 m-2  bg-gray-300 rounded-lg">Submit</button>
            </form>
        </div>
    )
}