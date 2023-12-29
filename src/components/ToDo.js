const ToDo = (props) => {
    const { toDos } = props
    return (
        <div className='to-do-container' >
            <div className="title">
                {props.title}
            </div>
            {toDos.map((toDo, index) => {
                return (
                    <div className="to-do"
                        style={{ display: "flex", justifyContent: "center", }}
                        key={toDo.id} >
                        <li >{index + 1} - {toDo.title} </li>
                        <button onClick={() => props.handleDeleteToDo(toDo.id)}> X </button>
                    </div>

                )
            })}
        </div>
    )
}
export default ToDo;