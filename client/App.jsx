import React from 'react';
import ListPosts from './components/ListPosts';
import SideMenu from './components/SideMenu';

function App() {
  return(
    <>
      <div className="flex">
        <SideMenu />
        <div className="flex-1">
          <ListPosts />
        </div>
      </div>
    </>
  )
}

export default App;