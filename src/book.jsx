export default function Book({bookInfo}){
    const {id,name,price} = bookInfo
    return (
        <div>
            <p>Book Bo: {id}</p>
            <h2>Book Name : {name}</h2>
            <button>Price : {price}</button>
        </div>
    )
}