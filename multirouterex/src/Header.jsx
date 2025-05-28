const Header = () => {
    const style={height:"100px",backgroundColor:"lightgrey"};
    return (
        <div style={style}>
            <a href="/">Home</a>&nbsp;&nbsp;
            <a href="/sidebar/*">MyPage</a>
            <a href="/about">About</a>
        </div>
    )
}

export default Header;