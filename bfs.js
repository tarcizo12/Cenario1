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





const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

const grafoTeste = {
    'A': ['B', 'C'],
    'B': ['C']
}

function visitaNo(grafo, inicio, fim){
    const visitados = [inicio]
    

    for(keys in grafo){
        for(index in grafo[keys]){
            const current = grafo[keys][index]
            
            if(!visitados.includes(current)){
                visitados.push(current)
            }
            
        }
    }

    console.log(visitados)
}


const teste = ['a','b']
teste.shift()
//const algoritmoMenorCaminho = BFS(grafo1, 'B', 'A');
//console.log(bfs(graph))


console.log(visitaNo(graph,'A'))
