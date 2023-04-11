const CurrentDate=()=>{
    let date = new Date()
    return (
        <div>
            <p>
            {date.toLocaleDateString()}

            </p>
        </div>
    )
}
export default CurrentDate