import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const SignupPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.passwordConfirm) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success('Account created successfully');
      navigate('/');
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - DevOps Job Portal</title>
        <meta name="description" content="Create your DevOps job portal account" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md border-thick border-black rounded-none shadow-[8px_8px_0px_0px_#000000]">
            <CardHeader className="space-y-1 border-b-medium border-black pb-4 mb-4">
              <CardTitle className="text-3xl font-black uppercase text-black">Create an account</CardTitle>
              <CardDescription className="text-lg font-bold text-black/80">
                Enter your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg font-black uppercase text-black">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Maya Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-black border-medium border-black rounded-none font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg font-black uppercase text-black">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="text-black border-medium border-black rounded-none font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-lg font-black uppercase text-black">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={8}
                    className="text-black border-medium border-black rounded-none font-bold"
                  />
                  <p className="text-sm font-bold text-black/70">Must be at least 8 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passwordConfirm" className="text-lg font-black uppercase text-black">Confirm Password</Label>
                  <Input
                    id="passwordConfirm"
                    type="password"
                    value={formData.passwordConfirm}
                    onChange={(e) => setFormData({ ...formData, passwordConfirm: e.target.value })}
                    required
                    className="text-black border-medium border-black rounded-none font-bold"
                  />
                </div>

                <Button type="submit" className="w-full bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80 mt-6" disabled={loading}>
                  {loading ? 'Creating account...' : 'Create Account'}
                </Button>
              </form>

              <p className="text-center text-lg font-bold text-black/80 mt-6">
                Already have an account?{' '}
                <Link to="/login" className="text-black hover:underline font-black uppercase">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SignupPage;
