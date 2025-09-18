
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Mail, Lock } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<z.ZodError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (result.success) {
      setErrors(null);
      navigate('/account-settings');
    } else {
      setErrors(result.error);
    }
  };

  return (
    <MobileLayout>
      <div className="p-8 bg-background h-full">
        <h1 className="text-3xl font-bold text-primary mb-2">Signin to your PopX account</h1>
        <p className="text-muted-foreground mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="pl-10"
            />
            {errors?.errors.find((err) => err.path[0] === 'email') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'email')?.message}</p>}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10"
            />
            {errors?.errors.find((err) => err.path[0] === 'password') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'password')?.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg py-6 rounded-xl shadow-lg">
            Login
          </Button>
        </form>
      </div>
    </MobileLayout>
  );
};

export default LoginPage;
