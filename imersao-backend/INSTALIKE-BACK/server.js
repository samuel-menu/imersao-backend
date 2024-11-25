import express from "express";

const app = express();                      // CONST serve para criar um varaivel -- APP é nome dela -- EXPRESS() é uma função
app.listen(3000, () => {                    // APP. - chamando função - listen é uma função então temos que abrir e fechar parenteses e passar parâmetros => é uma arrow funcion abrimos para passar parâmetros                        
    console.log("Servidor escutando...");   // CONSOLE.LOG é como um print
});                                         // para executar o código para ver se estar funcionando temos que usar node nome do arquivo no console para executar

// definindo rota do servidor 
app.get("/api", (req, res) => {             // req = requisição e res = resposta
    res.status(200).send("Bem vindos á Imersão");

});
