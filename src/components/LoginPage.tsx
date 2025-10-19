import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Logo } from './Logo';
import { Mail, Lock, Eye, EyeOff, Shield, ArrowLeft } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onBack?: () => void;
}

export function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-navy-50 via-background to-mint-50 animate-fade-in">
      {/* Back button */}
      {onBack && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="fixed top-4 left-4 rounded-full hover-lift glass"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
      )}

      <Card className="w-full max-w-md glass shadow-2xl border-2 border-white/40 animate-scale-in" style={{ borderRadius: '24px' }}>
        <CardHeader className="text-center space-y-6 pb-6">
          <Logo variant="gradient" size="lg" className="justify-center" />
          <div>
            <CardTitle className="text-2xl mb-2">
              {isRegister ? 'Create Account' : 'Welcome Back'}
            </CardTitle>
            <CardDescription className="text-base">
              {isRegister 
                ? 'Sign up karo apni health journey shuru karne ke liye'
                : 'Login karein apni health insights dekhne ke liye'}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl h-12 transition-all duration-200 focus:ring-2 focus:ring-accent"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-muted-foreground" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl h-12 pr-12 transition-all duration-200 focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Register only) */}
            {isRegister && (
              <div className="space-y-2 animate-slide-up">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-muted-foreground" />
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="rounded-xl h-12 transition-all duration-200 focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
            )}

            {/* Forgot Password (Login only) */}
            {!isRegister && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-12 rounded-xl hover-lift shadow-md transition-all duration-200"
            >
              {isRegister ? 'Create Account / Account banao' : 'Login / Sign In karo'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <Separator />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-card text-xs text-muted-foreground">
              OR
            </span>
          </div>

          {/* Google Login */}
          <Button
            variant="outline"
            type="button"
            className="w-full h-12 rounded-xl hover-lift border-2"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Toggle Auth Mode */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {isRegister
                ? "Already have an account? "
                : "Don't have an account? "}
              <span className="font-semibold text-accent">
                {isRegister ? "Login" : "Register"}
              </span>
            </button>
          </div>

          {/* Privacy Note */}
          <div className="pt-4 px-4 py-3 bg-muted/50 rounded-xl flex items-start gap-2">
            <Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Protected with JWT authentication & end-to-end encryption. 
              Your medical data is secure and private.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
