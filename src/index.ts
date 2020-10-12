function HelloWorld(callback: () => void) {
    //Experiment: what happens when this code is run?
    console.log("Test");
    setTimeout(callback, 5000);
    console.log("Test2");
    //Results: Test \n Test2 \n (Goodbye! (after 5 seconds total.))
}

function Goodbye()
{
    console.log("Goodbye!");
}

HelloWorld(Goodbye);