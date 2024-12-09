export default function Card(prop){
    return<>
     <div class="col-sm-4 mb-3 mb-sm-2">
    <div class="card bg-success-subtle text-success-emphasis">
      <div class="card-body">
        <h5 class="card-title">{prop.titulo}</h5>
        <p class="card-text">{prop.descricao}</p>
        <a href="#" class="btn btn-primary">{prop.preco}</a>
      </div>
    </div>
  </div>
    </>
}