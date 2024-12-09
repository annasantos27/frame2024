import { Container, Table,  } from "react-bootstrap";
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import Card from "./card";

export default function Cardesportes({produtos}) {
    return <>
        <Menu />
        <Container>
            <Container className="border border-succsess rounded-pill text-center col-sm-6">
                Lista de Produtos de Esportes
            </Container>
            <Container>
            <div class="row">
                {produtos.map(produto =>
                <Card titulo={produto.titulo}descricao={produto.descricao}preco={produto.preco.toLocaleString
                    ('pt-br',{style: 'currency', currency: 'BRL'})}/>
                )}
                </div>
            </Container>
        </Container>
        <Footer />
    </>
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/produtos/data')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { produtos: repo } }
}