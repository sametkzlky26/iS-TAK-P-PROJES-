
const Error = ({msg,retry}) => {
  return (
    <div className="error">
        <p>Üzgünüz verilere erişirken sorun oluştu</p>
        <p className="text"> {msg} </p>
        <button onClick={retry} className="btn" >
            <span>Tekrar Dene</span>
        </button>
      
    </div>
  )
}

export default Error
