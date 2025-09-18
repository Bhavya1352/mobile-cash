
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import { useState } from 'react';
import { z } from 'zod';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { User, Phone, Mail, Lock, Building } from 'lucide-react';

const signupSchema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required' }),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  companyName: z.string().min(1, { message: 'Company name is required' }),
  agency: z.enum(['yes', 'no'], { errorMap: () => ({ message: 'Please select an option' }) }),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    agency: '' as 'yes' | 'no',
  });
  const [errors, setErrors] = useState<z.ZodError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agency: e.target.value as 'yes' | 'no' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signupSchema.safeParse(formData);
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
        <h1 className="text-3xl font-bold text-primary mb-2">Create your PopX account</h1>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="text" id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="pl-10" />
            {errors?.errors.find((err) => err.path[0] === 'fullName') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'fullName')?.message}</p>}
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="pl-10" />
            {errors?.errors.find((err) => err.path[0] === 'phoneNumber') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'phoneNumber')?.message}</p>}
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="pl-10" />
            {errors?.errors.find((err) => err.path[0] === 'email') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'email')?.message}</p>}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="pl-10" />
            {errors?.errors.find((err) => err.path[0] === 'password') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'password')?.message}</p>}
          </div>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="text" id="companyName" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="pl-10" />
            {errors?.errors.find((err) => err.path[0] === 'companyName') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'companyName')?.message}</p>}
          </div>
          <div>
            <p className="text-muted-foreground mb-2">Are you an Agency?*</p>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input type="radio" id="yes" name="agency" value="yes" onChange={handleRadioChange} checked={formData.agency === 'yes'} className="mr-2" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="no" name="agency" value="no" onChange={handleRadioChange} checked={formData.agency === 'no'} className="mr-2" />
                <label htmlFor="no">No</label>
              </div>
            </div>
            {errors?.errors.find((err) => err.path[0] === 'agency') && <p className="text-red-500 text-xs mt-1">{errors.errors.find((err) => err.path[0] === 'agency')?.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg py-6 rounded-xl shadow-lg">
            Create Account
          </Button>
        </form>
      </div>
    </MobileLayout>
  );
};

export default SignupPage;
