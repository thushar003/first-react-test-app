function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items.map(item => <li>{item}</li>);

    return (
        <>    
          <h1>List</h1>
          <ul className="list-group">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      );
      //empty <> and </> tells React to wrap the elements using Fragment
}

export default ListGroup;