angular.module('catalogoProdutos', [])
  .controller('ProdutosController', function() {
    var self = this;

    self.categorias = ['Smartphones', 'TVs', 'Games'];

    self.produtos = [
      {nome: 'Moto G', descricao: "Motorola Moto G (2ª Geração) DTV Colors Preto, TV Digital, Dual Chip, Processador Quad Core 1.2GHz, Tela 5', Memória 16GB, Acompanha 2 Capas Coloridas", categoria: "Smartphones", preco: 799, imagens: ['img/motog.jpg', 'img/motog2.jpg']},
      {nome: 'XPeria Z2', descricao: "Sony Xperia Z2 Preto, Processador Quad-Core 2.3GHz, Câmera 20.7MP, Tela Full HD 5,2'', TV Digital, à Prova d’água, Memória 16GB + Smart Band", categoria: "Smartphones", preco: 1499, imagens: ['img/xperia.jpg', 'img/xperia2.jpg', 'img/xperia3.jpg']},
      {nome: 'Moto X', descricao: "Smartphone Motorola Moto X 2ª Geração XT1097 Couro Azul Navy Android 4.4.4 Wi-Fi 3G 4G Câmera 13MP (Frontal 2MP) Tela 5.2'' Quad-Core 32GB de Memória", categoria: "Smartphones", preco: 1199, imagens: ['img/motox.jpg', 'img/motox2.jpg', 'img/motox3.jpg']},
      {nome: 'TV 1', descricao: "", categoria: "TVs", preco: 10, imagens: ['img/motog.jpg']},
      {nome: 'TV 2', descricao: "", categoria: "TVs", preco: 10, imagens: ['img/motog.jpg']},
      {nome: 'TV 3', descricao: "", categoria: "TVs", preco: 10, imagens: ['img/motog.jpg']},
      {nome: 'XBox', descricao: "", categoria: "Games", preco: 10, imagens: ['img/motog.jpg']},
      {nome: 'Playstation', descricao: "", categoria: "Games", preco: 10, imagens: ['img/motog.jpg']},
      {nome: 'Fifa 2015', descricao: "", categoria: "Games", preco: 10, imagens: ['img/motog.jpg']}
      ];

    self.produtosFiltrados = self.produtos;

    self.filtrarPorCategoria = function(categoria) {
      var produtosFiltrados = [];

      for(var i = 0; i < self.produtos.length; i++) {
        var produto = self.produtos[i];

        if(produto.categoria === categoria) {
          produtosFiltrados.push(produto);
        }
      }

      self.produtosFiltrados = produtosFiltrados;      
    }
  });