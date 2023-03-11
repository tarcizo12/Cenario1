//algoritmo de Busca em Largura, ou BFS, visita todos os vértices de um grafo começando pelos adjacentes e indo de forma sucessiva (?). 

//grafo representado por uma matriz de adjacência

//assumindo que são quantos vértices? 10


function BFS (grafo, comeco, fim){
    //lista de vértices que serão visitados
    const verticesAVisitar = [];
    
    //set como uma coleção dos vértices visitados, apenas uma vez assumindo que ele vai escolher um caminho de um ponto a outro sem repetir os vértices (?)
    const visitados = new Set();
    
    //caminho
    const caminho = {};
    
    //adicionando vértice de origem nos verticesAVisitar e marcando como visitado no set
    verticesAVisitar.push(comeco);
    visitados.add(comeco);
    
    //iterando nos verticesAVisitar
    while(verticesAVisitar.lenght > 0){
        const verticeAtual = verticesAVisitar.shift();
        if (verticeAtual === fim){
            //chegamos ao final, falta so construir o caminho e retornar
            const resultado = [];
            while (verticeAtual !== comeco){
                resultado.push(verticeAtual);
                verticeAtual = caminho[verticeAtual]
            }
            resultado.push(comeco);
            return resultado.reverse(); 
        }
        for (const vizinho of grafo[verticeAtual]){
            if (!visitados.has(vizinho)){
                verticesAVisitar.push(vizinho);
                visitados.add(vizinho);
                caminho[vizinho] = verticeAtual;
            }
        }
        
    }
    
    return null;
    
}

function seConectam(grafo, inicio, fim ){
    const listaIndex = ['A','B','C','D']
    const partida = listaIndex.indexOf(inicio)
    const vertice = grafo[partida]



    return vertice.indexOf(fim) != -1
}

function varredura(grafo, inicio, fim){
    const listaIndex = ['A','B','C','D']
    const partida = listaIndex.indexOf(inicio)
    let verticeAtual = listaIndex[partida]
    let cont = partida
    let caminho = []

    
    do{
        
        cont += 1
        verticeAtual = listaIndex[cont]
        caminho.push[verticeAtual]
        console.log(verticeAtual)
    }while( !seConectam(grafo, verticeAtual,fim) )

    console.log(caminho)
   
}

const grafo1 = [
    ['B'], // A
    ['C'], // B
    ['D'], // C
    []  // D
] 




//const algoritmoMenorCaminho = BFS(grafo1, 'B', 'A');
varredura(grafo1, 'A','D')
