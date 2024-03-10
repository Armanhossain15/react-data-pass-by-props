import './App.css'
import BookShop from './bookshop'
function App() {
const books =[
  {id : 1, name : 'onik bonit tonik', price : 220},
  {id : 2, name : 'boter voy', price : 340},
  {id : 3, name : 'daw lara cini cara', price : 180},
  {id : 4, name : 'vallage na', price : 250},
  {id : 5, name : 'jani na re ba', price : 320},
]

  return (
    <>
      <h1>Vite + React</h1>
      {
        books.map(book => <BookShop book = {book}></BookShop>) 
      }
    </>
  )
}

export default App
