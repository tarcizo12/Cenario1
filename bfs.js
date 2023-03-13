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

function bfs(grafo, inicio, fim) {
    // Cria um dicionário para armazenar os pais de cada nó visitado
    let pais = {};
    // Cria uma fila para armazenar os nós que serão visitados
    let fila = [];
    // Adiciona o nó inicial na fila e define o pai como null
    fila.push(inicio);
    pais[inicio] = null;
    
    // Loop principal da busca em largura
    while (fila.length > 0) {
      // Remove o primeiro nó da fila
      let atual = fila.shift();
      // Verifica se o nó atual é o nó final
      if (atual == fim) {
        // Se for, constrói o caminho até o nó inicial
        let caminho = [];
        while (atual != null) {
          caminho.unshift(atual);
          atual = pais[atual];
        }
        // Retorna o caminho encontrado
        return caminho;
      }
      // Se o nó atual não for o nó final, visita seus vizinhos
      let vizinhos = grafo[atual];
      for (let i = 0; i < vizinhos.length; i++) {
        let vizinho = vizinhos[i];
        // Verifica se o vizinho já foi visitado
        if (!(vizinho in pais)) {
          // Se não foi, marca o vizinho como visitado, adiciona na fila e define o pai
          pais[vizinho] = atual;
          fila.push(vizinho);
        }
      }
    }
    // Se o nó final não foi encontrado, retorna null
    return null;
  }



  let grafo = {
    "A": ["B", "C"],
    "B": ["A", "C", "D"],
    "C": ["A", "B", "D", "E"],
    "D": ["B", "C", "E", "F"],
    "E": ["C", "D"],
    "F": ["D"]
  };
  
  let inicio = "A";
  let fim = "F";
  
  let caminho = bfs(grafo, inicio, fim);
  
  console.log("Caminho encontrado:", caminho);
