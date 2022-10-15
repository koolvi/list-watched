import React, { useState } from 'react';
import Initial from './pages/Initial';
import Movies from './pages/Movies';
import Series from './pages/Series';


function App() {
  const [currentPageId, setCurrentPageId] = useState(0);
  const pagesArr = [Initial, Movies, Series];
  const Page = pagesArr[currentPageId];
  return (
    <Page
      onClickBack={(id) => setCurrentPageId(id)}
      />
  );
}

export default App;

