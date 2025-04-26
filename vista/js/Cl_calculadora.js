class calculadora {
    constructor(dinero, dia) {
        this.dinero = dinero;
        this.dia = dia;
    }

    calcular() {

        let imprimir = document.getElementById('resultado');
        let imprimirTabla = document.getElementById('tabla_inversion');
        let montoActual = this.dinero;
        let tasaDiaria = 0.0003104; // 0.03349% diario

        
        for (let i = 1; i <= this.dia; i++) {
            let interesesDiarios = montoActual * tasaDiaria;
            montoActual = Number(montoActual) + interesesDiarios;
         
            imprimirTabla.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${montoActual.toFixed(0)}</td>
                <td>${interesesDiarios.toFixed(2)}</td>
            </tr>
            `;


            // Si quieres mostrar el progreso diario, puedes usar esto:
            // console.log(`Día ${i}: $${montoActual.toFixed(2)}`);
        }

        $("#tablaInvercion").dataTable({
            buttons: [{
                extend: "colvis",
                text: "Columnas Visibles"

            },
                "excel",
                "pdf"
            ],
            dom: "Bfrtip",
            responsive: true,
            destroy: true,

        });




        let gananciaTotal = montoActual - this.dinero;

        imprimir.innerHTML = "";
        imprimir.innerHTML += ` 
       <div class="row">
       <div class="col-md-4">
       <h2>💰 Monto Final</h2>
       <h3> ${montoActual.toFixed(0)} </h3>
       </div>
        <div class="col-md-4">
        <h2>💵 Monto Inicial</h2>
        <h3> ${Number(this.dinero).toFixed(0)} </h3>
        </div>
        <div class="col-md-4">
        <h2>💲Ganancia Total </h2>
            <h3> ${gananciaTotal.toFixed(0)} </h3>
            </div>
       
      
      
       </div>
         
        `;

        // Aquí puedes agregar el código para actualizar la tabla si es necesario
        // $("#tablaInvercion").DataTable({...});
    }

}