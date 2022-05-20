import { NextUIProvider } from "@nextui-org/react";

import Contador from "./Contador";


const App = () => {

    return (
        <>
            <NextUIProvider>
                <Contador />
            </NextUIProvider>
        </>
    )
}

export default App;