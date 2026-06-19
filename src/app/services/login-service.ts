import { Injectable } from '@angular/core';

/**
 * Autenticação simulada só para aprendizado: valida e-mail/senha fixos
 * e grava o e-mail em `localStorage` na chave `usuario`.
 */
@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly STORAGE_KEY = 'usuario';

  /**
   * Simula login no servidor: aqui só compara com credenciais fixas.
   * Em um app real, você chamaria uma API e guardaria um token JWT, etc.
   */
  login(email: string, senha: string): boolean {
    // Validação com credenciais fixas conforme a Aula 8
    if (email === 'admin@email.com' && senha === '123456') {
      localStorage.setItem(this.STORAGE_KEY, email);
      return true;
    }
    return false;
  }

  /** Remove o registro de usuário do navegador (logout local). */
  logout(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /** `true` se existir valor salvo na chave `usuario`. */
  isAuthenticated(): boolean {
    // Retorna true se encontrar algo na chave, false caso contrário
    return !!localStorage.getItem(this.STORAGE_KEY);
  }

  /** E-mail salvo após login bem-sucedido, ou `null` se não houver sessão local. */
  getUsuario(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);
  }
}