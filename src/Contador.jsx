import { Container, Card } from "@nextui-org/react";
import { useState } from "react";
import Buttons from "./contador/Buttons";
import Display from "./contador/Display";
import Header from "./contador/Header";

const Contador = () => {

    const [contador, setContador] = useState(0);

    let sumarContador = () => setContador(contador + 1);
    let restarContador = () => {
        
        if (contador > 0) {
        setContador(contador - 1);
        } else {
            return;
        }
    }
    let resetearContador = () => setContador(0); 

    return (
        <Container fluid >
            <Card css={{mw: "60%",m: "40px auto"}}>
                <Header/>
                <Display contador={contador} />
                <Card.Footer>
                    <Buttons 
                        sumarContador={sumarContador} 
                        restarContador={restarContador} 
                        resetearContador={resetearContador}
                    />
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Contador;