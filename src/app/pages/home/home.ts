import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) {}

  sendMessage() {
    this.http.post(
      'http://127.0.0.1:5000/contact',
      this.form
    ).subscribe({
      next: () => {
        alert('Message envoyé avec succès ✅');
        this.form = { name: '', email: '', message: '' };
      },
      error: () => {
        alert('Erreur lors de l’envoi ❌');
      }
    });
  }

}
