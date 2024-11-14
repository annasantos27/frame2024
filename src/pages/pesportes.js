import { Container, TabContainer } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";

export default function Pesportes(){ 
    return<>
    <Menu/>
        <Container>
           <Container className= "border border-succsess rounded-pill text-center col-sm-6">
            Lista de Produtos de Esportes
            </Container>
            <Container>
            Os Produtos
            </Container> 
        </Container>
        <Footer/>
        </>
}