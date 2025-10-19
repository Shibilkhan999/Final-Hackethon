import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ArrowLeft, User, Mail, Phone, Calendar, Shield, LogOut, Info, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface ProfileProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Profile({ onNavigate, onLogout }: ProfileProps) {
  const userData = {
    name: 'Shibil',
    email: 'shibil@healthmate.com',
    phone: '+92 300 1234567',
    joinDate: 'September 2025',
    avatar: ''
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-green-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl">Profile & Settings</h1>
          <p className="text-white/90">Apni profile manage karein</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Profile Card */}
        <Card className="shadow-lg" style={{ borderRadius: '24px' }}>
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24 border-4 border-primary">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="bg-primary text-white text-3xl">
                  {userData.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl mb-1">{userData.name}</h2>
                <p className="text-muted-foreground">HealthMate User since {userData.joinDate}</p>
              </div>
              <Button variant="outline" className="rounded-xl">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="shadow-md" style={{ borderRadius: '20px' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Personal Information
            </CardTitle>
            <CardDescription>Aapki personal jaankari</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-secondary/30 rounded-xl">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm">{userData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-secondary/30 rounded-xl">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm">{userData.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-secondary/30 rounded-xl">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="text-sm">{userData.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings & Links */}
        <Card className="shadow-md" style={{ borderRadius: '20px' }}>
          <CardHeader>
            <CardTitle>Settings & Information</CardTitle>
            <CardDescription>Settings aur important links</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-auto p-4 rounded-xl hover:bg-secondary/50"
            >
              <Shield className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm">Privacy Policy</p>
                <p className="text-xs text-muted-foreground">Apni privacy ke bare mein janein</p>
              </div>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-auto p-4 rounded-xl hover:bg-secondary/50"
            >
              <Info className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm">Terms of Service</p>
                <p className="text-xs text-muted-foreground">Service ke niyam</p>
              </div>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-auto p-4 rounded-xl hover:bg-secondary/50"
            >
              <Heart className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm">About HealthMate</p>
                <p className="text-xs text-muted-foreground">HealthMate ke bare mein</p>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="shadow-md bg-yellow-50 border-yellow-200" style={{ borderRadius: '20px' }}>
          <CardHeader>
            <CardTitle className="text-lg">Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm mb-2">
                <strong>AI is for understanding only, not for medical advice.</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                HealthMate uses AI to help you understand your medical reports. However, this information is for educational purposes only and should not be considered medical advice.
              </p>
            </div>
            <Separator className="bg-yellow-300" />
            <div className="bg-white p-4 rounded-xl">
              <p className="text-sm mb-2">
                <strong>AI sirf samajhne ke liye hai, medical advice nahi.</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                HealthMate AI ka istemal reports samajhne ke liye karta hai. Lekin ye sirf educational purpose ke liye hai. Koi bhi medical decision lene se pehle apne doctor se zaroor milein.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button
          variant="destructive"
          className="w-full h-12 rounded-xl gap-2"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5" />
          Logout / Sign Out karein
        </Button>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-4">
          <p>Made with 💚 for better health</p>
          <p className="text-xs mt-1">Sehat ke liye banaya gaya</p>
        </div>
      </div>
    </div>
  );
}
