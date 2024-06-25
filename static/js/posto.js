var num = 1

const nivelBattery = document.getElementById("nivelBattery")

// if( num < 4 ){
//     setInterval(()=>{
//         nivelBattery.innerHTML = '<i class="bi bi-battery-half"></i>'
//     }, 5000)
//     setInterval(()=>{
//         nivelBattery.innerHTML = '<i class="bi bi-battery"></i>'
//     }, 10000)
// }

    function atualizarContainer() {
            fetch('/get_dados') // Chama a rota no servidor Flask
                .then(response => response.json()) // Extrai os dados da resposta como JSON
                .then(data => {
                    
                    // Atualiza o conteúdo da div "dados" com os novos dados recebidos
                    if (data.dados >= 6){

                        console.log("NÃO TA CARREGANDO")
                        nivelBattery.innerHTML = '<i class="bi bi-battery-full"></i>'
                        
                        
                    }else{

                        console.log("TA CARREGANDO")
                        
                        nivelBattery.innerHTML = '<i class="bi bi-battery"></i>'
                        

                    }

                    
                    document.getElementById('dados').value = data.dados;
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao atualizar o conteúdo:', error);
                });
        }

        // setInterval(()=>{
        //     nivelBattery.innerHTML = '<i class="bi bi-battery-half"></i>'
        // }, 5000)
        // Chama a função inicialmente para carregar os dados ao carregar a página
        atualizarContainer();
        
        // // Exemplo de chamada periódica para atualizar os dados a cada X segundos
        setInterval(atualizarContainer, 2000);
        
        // valorDistancia = document.getElementById('dados').value
        
        //     if (valorDistancia >= 6){

        //         console.log("NÃO TA CARREGANDO fora da   ", valorDistancia)
            
        //         nivelBattery.innerHTML = '<i class="bi bi-battery-half"></i>'
               
                // setInterval(()=>{
                //     nivelBattery.innerHTML = '<i class="bi bi-battery"></i>'
                // }, 2000)
                
        //     }else{
                
        //         console.log("TA CARREGANDO fora da função   ", valorDistancia)
                
        //         nivelBattery.innerHTML = '<i class="bi bi-battery-half"></i>'
                    
        //          setInterval(()=>{
        //             nivelBattery.innerHTML = '<i class="bi bi-battery-full"></i>'
        //         }, 2000)

        //     }
    
