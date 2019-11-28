/*
0 obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do usuario pelo ID
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {            
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}


function obterEndereco(idUsuario, callback){
    setTimeout(() =>{
        return callback(null,{
            rua: 'Rua conceicao de almeida',
            numero: 107
        })
    }, 2000)
}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || === false
    if(error){
        console.log('Deu ruim em Usuario', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
        console.log('Deu ruim em Telefone', error1)
        return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.log('Deu Ruim no Endereço', error2)
                return;
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua, endereco.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})