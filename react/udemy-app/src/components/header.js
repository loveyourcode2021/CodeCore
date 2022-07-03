const Header = (props) =>{
    return (
        <>
            <header className={props.active? 'active': "non-active"}>
                <div className="logo"> Code News</div>
                <input onChange={props.keyword}/>
                <button onClick={props.changeColor}>Change It</button>
            </header>
        </>
    )
}


export default Header;