import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.css']
})
export class LinhasComponent implements OnInit {

  quadrados:any = [];
  p1Prox = true;
  ganhador = '';
  contador = 0;
  empate = '';
  atualizar = true;
  constructor() { }

  ngOnInit() { }

  novoJogo(){
    this.quadrados = Array(9).fill(null);
    this.ganhador = '';
    this.empate = '';
    this.contador = 0;
    this.atualizar = false;
  }

  get jogador(){
    return this.p1Prox ? 'X' : 'O'
  }

  movimento(idx:number){
    if(!this.quadrados[idx]){
      this.quadrados.splice(idx, 1, this.jogador)
      this.p1Prox = !this.p1Prox;
      this.contador++;
    }
    this.ganhador = this.calcularGanhador();

    if(!this.ganhador && this.contador == 9){
      this.empate = 'yes';
    }
  }

  calcularGanhador(){
    const linhas =[
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0 ; i < linhas.length ; i++){
      const [a, b, c] = linhas[i];
      if(this.quadrados[a] && this.quadrados[a] === this.quadrados[b] && this.quadrados[a] === this.quadrados[c]){
        return this.quadrados[a];
      }
    }
    return null;
  }

}