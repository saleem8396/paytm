
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<signup/>}></Route>
      <Route path="/signin" element={<signin/>}></Route>
      <Route path="/send" element={<sendmoney/>}></Route>
      <Route></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
