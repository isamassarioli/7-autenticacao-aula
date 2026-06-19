import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-armazenamento',
  imports: [FormsModule],
  templateUrl: './exemplo-armazenamento.html',
  styleUrl: './exemplo-armazenamento.css',
})
export class ExemploArmazenamento {
  readonly chaveLocal = 'demo-exemplo-local';
  readonly chaveSessao = 'demo-exemplo-sessao';

  /** Valores ligados aos campos de texto (ngModel). */
  textoParaSalvarLocal = '';
  textoParaSalvarSessao = '';

  /** O que foi lido do storage na última operação de “Recuperar”. */
  lidoDoLocal = '(ainda não recuperou)';
  lidoDaSessao = '(ainda não recuperou)';
  mensagemLocal = '';
  mensagemSessao = '';

  /** Grava string em localStorage. Só aceita strings; objetos use JSON.stringify. */
  salvarLocal(): void {
    localStorage.setItem(this.chaveLocal, this.textoParaSalvarLocal);
    this.mensagemLocal = 'Valor salvo em localStorage.';
  }

  /** Lê string de localStorage. Retorna null se a chave não existir. */
  recuperarLocal(): void {
    const valor = localStorage.getItem(this.chaveLocal);
    this.lidoDoLocal = valor || '(não encontrado)';
  }
  

  /** Remove só esta chave do localStorage. */
  limparLocal(): void {
    localStorage.removeItem(this.chaveLocal);
    this.mensagemLocal = 'Valor removido de localStorage.';
  }

  salvarSessao(): void {
    sessionStorage.setItem(this.chaveSessao, this.textoParaSalvarSessao);
    this.mensagemSessao = 'Valor salvo em sessionStorage.';
  }

  recuperarSessao(): void {
    const valor = sessionStorage.getItem(this.chaveSessao);
    this.lidoDaSessao = valor || '(não encontrado)';
  }

  limparSessao(): void {
    sessionStorage.removeItem(this.chaveSessao);
    this.mensagemSessao = 'Valor removido de sessionStorage.';  
  }
}
