interface FooterProps {
    text: string
}

const Footer = ({text} : FooterProps) => {
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default Footer