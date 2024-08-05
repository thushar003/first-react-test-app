// PascalCasing
function Message() {
    // JSX: JavaScript XML
    const name = 'Thushar';
    if (name)
        return <h1>Hello {name}</h1>;   // {} can be used to dynamically reference variables
    return <h1>Hello World</h1>;
}

export default Message;