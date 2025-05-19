import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login'); 
  }, []);

  return <h1>¡Bienvenido!</h1>;
}
