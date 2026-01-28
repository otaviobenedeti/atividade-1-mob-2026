function obterDados(e){
    const  dolar = fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp)
        e.innerHTML  =resp.USDBRL.bid
    })
}