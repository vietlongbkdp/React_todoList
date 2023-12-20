
function RenderListFruit(){
    const fruits =  ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"]
    return (
        <>
            <ul>
                {fruits.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </>

    )
}

export default RenderListFruit;