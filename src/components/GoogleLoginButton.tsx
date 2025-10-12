import { useEffect } from 'react';

interface GoogleLoginButtonProps {
  onLogin: (token: string) => void;
}

declare global {
  interface Window {
    google: any;
  }
}

function GoogleLoginButton({ onLogin }: GoogleLoginButtonProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById('googleSignInButton'),
          {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'continue_with',
            shape: 'rectangular',
          }
        );
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = async (response: any) => {
    try {
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        onLogin(data.token);
      } else {
        console.error('Google login failed:', data.message);
      }
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return <div id="googleSignInButton" className="w-full"></div>;
}

export default GoogleLoginButton;
