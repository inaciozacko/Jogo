import { Component } from '@angular/core';
import { pb1, pb2 } from '@angular/core/src/render3';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.css']
})
export class LinhasComponent {
  p1 = 'X'
  p2 = 'O'

  jogada = this.p1;
  fim = false

  iniciaEspacos(){
    var espacos = document.getElementsByClassName('espaco')
    for (var i = 0; i < espacos.length ; i++){

      espacos[i].addEventListener('click', function(){
        if(this.fim){
          return;
        }
        if(this.getElementsByTagName('img').length == 0){
          if(this.jogada == this.p1){
            this.innerHTML = '✖️'
            this.jogada = this.p2;
          }else{
            this.innerHTML = '⚫'
            this.setAttribute("jogada", this.p1);
            this.jogada = this.p1;
          }
        }
      });
    }
  }
}