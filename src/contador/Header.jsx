import {Card, Row, Text} from "@nextui-org/react";


const Header = () => {

    return (
        <Card.Header css={{height: "80px", backgroundColor: "$green600", br: "10px"}}>
            <Row justify="center">
                <Text h1 color="$green100">Contador</Text>   
            </Row>
        </Card.Header>
    )
}

export default Header;