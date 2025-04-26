<div class="container ">
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6  centrar">
            <img class="imgLogo" src="https://th.bing.com/th/id/R.bab1b9b9200ad1a18855f98e3462e39d?rik=v8LfJWU4Zjk9MQ&pid=ImgRaw&r=0" alt="Logo">
        </div>
        <div class="col-md-3"></div>
    </div>
</div>
<div class="container" id="Panel_Calculador">
    <form id="form_calculadora" action="Calcular">
        <div class="container DiseñoDiv ">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="cantidad_dinero">
                        <h2>💰 Monto a Invertir</h2>
                    </label>
                    <input name="cantidad_dinero" id="cantidad_dinero" class="inputCalculador form-control mt-3" type="number" required>

                </div>
                <div class="col-md-3"></div>


            </div>
        </div>

        <div class="container DiseñoDiv mt-4">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <label for="dias">
                        <h2>📅 Plazo de Inversión</h2>
                    </label>
                    <input name="dias" id="dias" class="inputCalculador form-control" type="number" required>

                </div>
                <div class="col-md-3"></div>
            </div>
        </div>
        <div class="centrar">
            <button type="submit" class="btn-calcular">Calcular Inversión</button>
        </div>
    </form>

</div>

<div id="Panel_Resultado" class="container DiseñoDiv mt-4 ocultar">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 centrar">

            <div>
                
                <div id="resultado"></div>
            </div>
            <button id="btn_Regresar" class="btn-calcular mb-4 mt-3">Regresar</button>

            <h2>📈 Inversión</h2>
            <table id="tablaInvercion" class="table table-bordered">
                <thead>
                    <tr>
                        <th>dia</th>
                        <th>Monto</th>
                        <th>Interes</th>
                    </tr>
                </thead>
                <tbody id="tabla_inversion">

                </tbody>
            </table>

        </div>
        <div class="col-md-2"></div>
    </div>
</div>


