// Code Keypad Component Here

function Keypad() {
    function change(event) { 
        console.log("Entering password...");
    }

    return (
        <div>
            <input onChange={change} type="password" name="password" placeholder="Enter password..." />
        </div>
    )
}

export default Keypad;