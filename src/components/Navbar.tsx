interface NavbarProps {
    text: String;
}

const Navbar : React.FC<NavbarProps> = ({text}) => {

    return (
        <>
                <div className="header">
                    <div className="text">
                        {text}
                    </div>
                </div>
            </>
    )
}

export default Navbar