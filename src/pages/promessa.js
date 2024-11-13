import { useEffect, useState } from "react";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from "react-bootstrap";
export default function Promessa() {
const [pao, setpao] = useState("")
    useEffect(() => { 
        setTimeout(async() => {
        document.title = "Promessa é dívida";
        const espera = await mudaPao("é dívida");
        setpao(espera)
    }, 4000)
});
    return <>
        <Menu />
        <Container>
            Promessa {pao==="" ? <img src="./loading.gif" width={60} height={20}/> : pao}
        </Container>
        <Footer />
    </>
}
function mudaPao(texto){
    return new Promise ((resolva) => 
        setTimeout(() => {
        resolva(texto)
    }, 1000));
}