import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  email = 'admin@email.com';
  senha = '123456';
  erro = false;

  mensagemStatus =
    'Preencha o formulário e clique em Entrar. As credenciais serão validadas de forma local (simulação).';

  readonly loginService = inject(LoginService);
  readonly router = inject(Router);

  ngOnInit(): void {
    // Opcional: Se o usuário já estiver logado, pode redirecionar para o dashboard automaticamente
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit(): void {
    // Invoca o serviço para validar o e-mail e a senha
    const sucesso = this.loginService.login(this.email, this.senha);
    
    if (sucesso) {
      this.erro = false;
      this.router.navigate(['/dashboard']); // Redireciona em caso de sucesso
    } else {
      this.erro = true; // Exibe a mensagem de erro no template
    }
  }
}