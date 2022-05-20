import {Card, Row, Text} from "@nextui-org/react";


const Display = ({contador}) => {

    return (
        <Card.Body  css={{height: "150px", mt: "15px",backgroundColor: "$green200", br: "10px"}}>
                <Row justify="center" css={{height: "100%", ai:"center"}}>
                    <Text h2 size="4rem">
                        {contador}
                    </Text>
                </Row>
        </Card.Body>
    )
}

export default Display;