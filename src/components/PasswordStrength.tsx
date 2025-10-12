import { useMemo } from 'react';

interface PasswordStrengthProps {
  password: string;
}

function PasswordStrength({ password }: PasswordStrengthProps) {
  const strength = useMemo(() => {
    if (password.length === 0) return { level: 0, text: '', color: '' };

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
      return { level: 1, text: 'Weak', color: 'bg-red-500' };
    } else if (score <= 3) {
      return { level: 2, text: 'Medium', color: 'bg-yellow-500' };
    } else {
      return { level: 3, text: 'Strong', color: 'bg-green-500' };
    }
  }, [password]);

  if (password.length === 0) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center gap-2 mb-1">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${strength.color}`}
            style={{ width: `${(strength.level / 3) * 100}%` }}
          ></div>
        </div>
        <span className={`text-sm font-medium ${
          strength.level === 1 ? 'text-red-600' :
          strength.level === 2 ? 'text-yellow-600' :
          'text-green-600'
        }`}>
          {strength.text}
        </span>
      </div>
      <p className="text-xs text-gray-600">
        {password.length < 8 && 'Use at least 8 characters. '}
        {!/[A-Z]/.test(password) && 'Add uppercase letters. '}
        {!/\d/.test(password) && 'Add numbers. '}
        {!/[^A-Za-z0-9]/.test(password) && 'Add special characters.'}
      </p>
    </div>
  );
}

export default PasswordStrength;
