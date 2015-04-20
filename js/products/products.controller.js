angular.module('catalogoProdutos', [])
  .controller('ProdutosController', function() {
    var self = this;

    self.produtoSelecionado = undefined;
    self.categoriaSelecionada = 'Todos';
    self.categorias = ['Todos', 'Smartphones', 'TVs', 'Games'];

    self.produtos = [
      {
          nome: 'MotoG',
          descricao: "Motorola Moto G (2ª Geração) DTV Colors Preto, TV Digital, Dual Chip, Processador Quad Core 1.2GHz, Tela 5', Memória 16GB, Acompanha 2 Capas Coloridas",
          categoria: "Smartphones",
          fabricante: "Motorola",
          preco: 799,
          imagens: [
              'img/motog.jpg',
              'img/motog2.jpg'
          ]
      },
      {
          nome: 'XPeriaZ2',
          descricao: "Sony Xperia Z2 Preto, Processador Quad-Core 2.3GHz, Câmera 20.7MP, Tela Full HD 5,2'', TV Digital, à Prova d’água, Memória 16GB + Smart Band",
          categoria: "Smartphones",
          fabricante: "Sony",
          preco: 1499,
          imagens: [
              'img/xperia.jpg',
              'img/xperia3.jpg'
          ]
      },
      {
          nome: 'MotoX',
          descricao: "Smartphone Motorola Moto X 2ª Geração XT1097 Couro Azul Navy Android 4.4.4 Wi-Fi 3G 4G Câmera 13MP (Frontal 2MP) Tela 5.2'' Quad-Core 32GB de Memória",
          categoria: "Smartphones",
          fabricante: "Motorola",
          preco: 1199,
          imagens: [
              'img/motox.jpg',
              'img/motox2.jpg',
              'img/motox3.jpg'
          ]
      },
      {
          nome: 'Smart TV Samsung',
          descricao: "Smart TV LED 40” Samsung 40H5103 Full HD",
          categoria: "TVs",
          fabricante: "Samsung",
          preco: 1399,
          imagens: [
              'img/tv_samsung.jpg',
              'img/tv_samsung2.jpg'
          ]
      },
      {
          nome: 'Smart TV LG',
          descricao: "Smart TV LED LG 42'' 42LB5800 Full HD, 3 HDMI, 3 USB, Time Machine Ready",
          categoria: "TVs",
          fabricante: "LG",
          preco: 1699,
          imagens: [
              'img/tv_lg.jpg',
              'img/tv_lg2.jpg'
          ]
      },
      {
          nome: 'TV LED Sony',
          descricao: "TV LED Sony 32'' KDL-32R435B HD com 2 HDMI, 1 USB, Rádio FM, MHL, Motion flow 120hz, Photo Share e Screen Mirroring",
          categoria: "TVs",
          fabricante: "Sony",
          preco: 999,
          imagens: [
              'img/tv_sony.jpg',
              'img/tv_sony2.jpg',
              'img/tv_sony3.jpg'
          ]
      },
      {
          nome: 'Xbox One',
          descricao: "Console Xbox One Microsoft 5C7-00007 1TB",
          categoria: "Games",
          fabricante: "Microsoft",
          preco: 1899,
          imagens: [
              'img/xbox.jpg',
              'img/xbox2.jpg',
              'img/xbox3.jpg'
          ]
      },
      {
          nome: 'Playstation 4',
          descricao: "Console Playstation 4 - 500GB - Sony",
          categoria: "Games",
          fabricante: "Sony",
          preco: 2099,
          imagens: [
              'img/playstation.jpg',
              'img/playstation2.jpg'
          ]
      },
      {
          nome: 'Fifa 15',
          descricao: "Jogo Fifa 15 para XBOX One",
          categoria: "Games",
          fabricante: "Electronic Arts",
          preco: 109,
          imagens: [
              'img/fifa.jpg',
              'img/fifa2.jpg',
              'img/fifa3.jpg'
          ]
      }
  ];

    self.produtosFiltrados = self.produtos;

    self.filtrarPorCategoria = function(categoria) {
      self.categoriaSelecionada = categoria;

      var produtosFiltrados = [];

      for(var i = 0; i < self.produtos.length; i++) {
        var produto = self.produtos[i];

        if(produto.categoria === categoria || categoria === 'Todos') {
          produtosFiltrados.push(produto);
        }
      }

      self.produtosFiltrados = produtosFiltrados;      
    }

    self.exibeNomeCategoria = function() {
      if(self.categoriaSelecionada === 'Todos') {
        return 'Exibindo produtos de todas categorias';
      } else {
        return 'Exibindo produtos da categoria ' + self.categoriaSelecionada;
      }
    }

    self.selecionarProduto = function(produto) {
      self.produtoSelecionado = produto;
    }

    self.currentIndex = 0;

    self.setCurrentSlideIndex = function (index) {
        self.currentIndex = index;
    };

    self.isCurrentSlideIndex = function (index) {
        return self.currentIndex === index;
    };

    self.prevSlide = function ($event) {
        self.currentIndex = (self.currentIndex < self.produtoSelecionado.imagens.length - 1) ? ++self.currentIndex : 0;
        $event.preventDefault();
    };

    self.nextSlide = function ($event) {
        $event.preventDefault();
        self.currentIndex = (self.currentIndex > 0) ? --self.currentIndex : self.produtoSelecionado.imagens.length - 1;
    };
  });