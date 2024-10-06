import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllPost from './components/AllPost'
import Navbar from './components/Navbar'
import Post from './components/Post'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<AllPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default App