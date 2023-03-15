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
      //Identifica o primeiro nó que foi dado push no começo, a partir do nó indicado que o fantasma começa (inicio)
      let atual = fila.shift();
      // Verifica se o nó atual é o nó final
      //Se o nó atual for o nó final, já constrói o caminho a partir dos pais
      if (atual == fim) {
        // Se for, constrói o caminho até o nó inicial
        //Enquanto não for, o que aconteceu? No else...
        //Visitando os vizinhos dos nós, e definindo os pais no dicionário
        let caminho = [];
        while (atual != null) { //null é o que foi definido no começo, então foi lá pro final, é a condição de parada
          caminho.unshift(atual); //adiciona no caminho o nó atual, até que seja nulo
          atual = pais[atual]; //seta o nós atual como seu pai, para conseguir fazer o loop novamente a partir do pai
        }
        // Retorna o caminho encontrado
        return caminho;
      }


      // Se o nó atual não for o nó final, visita seus vizinhos
      //Quem são os vizinhos? São os nós ligados ao nó principal que está sendo analisado neste loop.
      //Como é um dicionário, pesquisa pela chave, a lista ligada que representa esses nós adjacentes
      let vizinhos = grafo[atual];
      //Enquanto for menor que o tamanho dos valores da key do dicionário
      for (let i = 0; i < vizinhos.length; i++) {
        //o primeiro vizinho
        let vizinho = vizinhos[i];
        // Verifica se o vizinho já foi visitado
        //Como faz essa verificação? Se ele já está no dicionário dos pais
        if (!(vizinho in pais)) {
          // Se não foi, marca o vizinho como visitado, adiciona na fila e define o pai
          //Aqui está definindo o pai do nó como o atual, o principal que está sendo analisado no loop
          pais[vizinho] = atual;
          //Adiciona na fila o nó que foi vizitado, para depois construir o caminho
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
  
  let caminho = bfs(grafo, inicio, fim);
  
  console.log("Caminho encontrado:", caminho);
