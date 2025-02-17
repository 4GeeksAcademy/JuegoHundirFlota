const size = 100;
let board = []
let ships = 25;

function crearTablero(){
    let table = document.getElementById('Tablero');
    for (let i = 0; i < SIZE; i++){
        let row = document.createElement('tr');
        board[i] = [];
        for (let j = 0; j < SIZE; j++) {
            let cell = document.createElement('td');
            cell.addEventListener('click', () => disparar(i, j));
            row.appendChild(cell);
            board[i][j] = 'water'; 
          }
          table.appendChild(row);
        }
        colocarBarcos();
      }
      
      
      function colocarBarcos() {
        let placedShips = 0;
        while (placedShips < ships) {
          let x = Math.floor(Math.random() * SIZE);
          let y = Math.floor(Math.random() * SIZE);
          if (board[x][y] !== 'ship') {
            board[x][y] = 'ship';
            placedShips++;
          }
        }
      }
      
      
      function disparar(x, y) {
        if (board[x][y] === 'water') {
          document.querySelectorAll('#Tablero tr')[x].children[y].classList.add('miss');
          board[x][y] = 'miss';
        } else if (board[x][y] === 'ship') {
          document.querySelectorAll('#Tablero tr')[x].children[y].classList.add('hit');
          board[x][y] = 'hit';
          ships--;
          if (ships === 0) {
            alert('¡Has hundido todos los barcos!');
          }
        }
      }
      
     
      function reiniciarJuego() {
        board = [];
        ships = 25;
        document.getElementById('Tablero').innerHTML = '';
        crearTablero();
      }
      
      
      crearTablero();
    