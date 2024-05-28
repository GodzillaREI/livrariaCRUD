import React from 'react';

const BooksContext = React.createContext();

export default BooksContext;
<BooksContext.Provider value={{ books, setBooks }}>
 <Switch>
 ...
 </Switch>
</BooksContext.Provider>