import { Grid, Button, Text} from "@nextui-org/react";

const Buttons = ({sumarContador, restarContador, resetearContador}) => {
    return (
            <Grid.Container justify="space-around">
                <Grid sm={6} md={4} lg={6}justify="space-around">
                    <Button onClick={sumarContador} css={{backgroundColor: "$green500", m: "10px 0" }}>
                        <Text css={{color: "$green100", fontSize: "1.3rem", fontWeight: "$semibold"}}>
                            Sumar
                        </Text> 
                    </Button>
                </Grid>
                <Grid sm={6} md={4} lg={6} justify="space-around">
                    <Button onClick={restarContador} css={{backgroundColor: "$green500", m: "10px 0" }}>
                        <Text css={{color: "$green100", fontSize: "1.3rem", fontWeight: "$semibold"}}>
                            Restar
                        </Text> 
                    </Button>                        
                </Grid>
                <Grid sm={12} md={4}  justify="space-around">
                    <Button onClick={resetearContador} css={{backgroundColor: "$error", m: "10px 0" }}>
                        <Text css={{color: "$green100", fontSize: "1.3rem", fontWeight: "$semibold"}}>
                            Reset
                        </Text> 
                    </Button>
                </Grid>
            </Grid.Container>
    )
}

export default Buttons;