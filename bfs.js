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

  let grafoDois = {
    "A": ["B","D"],
    "B": ["C"],
    "C": ["D"],
    "D": []
  }
  
  let inicio = "A";
  let fim = "D";
  
  let caminho = bfs(grafoDois, inicio, fim);
  
  console.log("Caminho encontrado:", caminho);
