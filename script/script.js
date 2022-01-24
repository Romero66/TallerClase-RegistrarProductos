
class Producto{
        constructor(namee, price, year) {
            this.namee = namee;
            this.price = price;
            this.year = year;
        }
    }
const capturarDato = () => {
    let namee = document.getElementById('namee').value;
    let price = document.getElementById('price').value;
    let year = document.getElementById('year').value;
}
let register = {
    namee,
    price,
    year

}
console.log(register)
    


class UI {
    addProduct(product) {
      const productList =  document.getElementById('listarProducto');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card" text-center>
            <div class="card-body">
                <strong>Producto</strong>${product.namee}
                <strong>Precio</strong>${product.price}
                <strong>año</strong>${product.year}
                <td>${product.namee}</td>
            <td>${product.price}</td>
            <td>${product.year}</td>
            </div>
        </div>
        `;
        productList.appendChild(element);
        
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProducto () {

    }
    showProducto () {

    }
}




// capturar los datos del formulario 

document.getElementById('product-form')
.addEventListener('submit', function (e) {
   const nameProdu = document.getElementById('namee').value;
    const precioProdu = document.getElementById('price').value;
    const añoProdu = document.getElementById('year').value;
    
    // console.log(nameProdu, precioProdu, añoProdu);
    const productot = new Producto(namee, price, year);
    const ui = new UI();
    ui.addProduct(productot);
    ui.resetForm();
    e.preventDefault();
})