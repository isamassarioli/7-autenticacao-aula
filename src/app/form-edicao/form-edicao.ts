import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { HasPendingChanges } from '../guards/pending-changes.guard';

@Component({
  selector: 'app-form-edicao',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-edicao.html',
  styleUrl: './form-edicao.css',
})
// export class FormEdicao implements HasPendingChanges {
export class FormEdicao {
  nome = '';
  observacao = '';
  salvo = false;
  mensagem =
    'Digite algo para simular edição. Se tentar sair sem salvar, o canDeactivate fará a pergunta de confirmação.';

  onInputChange(): void {
    this.salvo = false;
    this.mensagem = 'Alterações detectadas. O formulário está com pendências.';
  }

  salvar(): void {
    this.salvo = true;
    this.mensagem =
      'Conteúdo marcado como salvo. Agora você pode sair da rota sem confirmação.';
  }

  // hasPendingChanges(): boolean {
  //   const temConteudo = this.nome.trim() !== '' || this.observacao.trim() !== '';
  //   return temConteudo && !this.salvo;
  // }
}
