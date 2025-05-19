import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login', { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/welcome');
    } catch (err) {
      alert('Login fallido');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Iniciar sesión</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Correo" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
    </form>
  );
}
