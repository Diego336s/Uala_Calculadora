(function () {


   
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('#form_calculadora')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
           
            event.preventDefault()
            if (!form.checkValidity()) {
                
                 event.stopPropagation()
            }else{
                let dinero = document.getElementById('cantidad_dinero').value;
                let dias = document.getElementById('dias').value;

                let objcalculadora = new calculadora(dinero, dias);
                objcalculadora.calcular();

               
               
        
                $("#Panel_Calculador").hide();
               
        
                $("#Panel_Resultado").show();
        

               
                
                form.classList.add('was-validated')
            }
      
        
          }, false)
        })

        



    let btn_volver = document.getElementById('btn_Regresar');
    btn_volver.addEventListener('click', () => {
        document.getElementById('form_calculadora').reset();

        $("#Panel_Resultado").hide();
        $("#Panel_Calculador").show();

      
      
    });

    
}

)();