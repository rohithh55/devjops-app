import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast.success('Logged in successfully');
      navigate('/');
      setLoading(false);
    }, 1000);
  };

  const handleGitHubLogin = () => {
    toast.error('GitHub login not configured.');
  };

  return (
    <>
      <Helmet>
        <title>Login - DevOps Job Portal</title>
        <meta name="description" content="Login to access your DevOps job portal account" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md border-thick border-black rounded-none shadow-[8px_8px_0px_0px_#000000]">
            <CardHeader className="space-y-1 border-b-medium border-black pb-4 mb-4">
              <CardTitle className="text-3xl font-black uppercase text-black">Welcome back</CardTitle>
              <CardDescription className="text-lg font-bold text-black/80">
                Login to your account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button
                type="button"
                variant="outline"
                className="w-full gap-2 border-medium border-black text-black font-black uppercase rounded-none"
                onClick={handleGitHubLogin}
              >
                <Github className="w-5 h-5" />
                Login with GitHub
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t-medium border-black" />
                </div>
                <div className="relative flex justify-center text-xs uppercase font-black">
                  <span className="bg-card px-4 text-black">Or continue with</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="text-black border-medium border-black rounded-none font-bold"
                  />
                </div>

                <Button type="submit" className="w-full bg-black text-white font-black uppercase border-medium border-black rounded-none hover:bg-black/80" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </form>

              <p className="text-center text-lg font-bold text-black/80">
                Don't have an account?{' '}
                <Link to="/signup" className="text-black hover:underline font-black uppercase">
                  Sign up
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

export default LoginPage;
