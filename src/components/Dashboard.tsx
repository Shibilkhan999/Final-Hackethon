import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Logo } from './Logo';
import { 
  FileText, 
  Activity, 
  Upload, 
  PlusCircle, 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Sparkles,
  Bell,
  Search,
  BarChart3,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const recentReports = [
    { 
      id: 1, 
      name: 'Blood Test Report', 
      date: '15 Oct 2025', 
      type: 'blood',
      status: 'analyzed',
      insight: 'Hemoglobin slightly low'
    },
    { 
      id: 2, 
      name: 'X-Ray Chest', 
      date: '10 Oct 2025', 
      type: 'xray',
      status: 'analyzed',
      insight: 'No abnormalities detected'
    },
    { 
      id: 3, 
      name: 'Lipid Profile', 
      date: '5 Oct 2025', 
      type: 'blood',
      status: 'analyzed',
      insight: 'All parameters normal'
    },
  ];

  const vitals = [
    { 
      name: 'Blood Pressure', 
      value: 120, 
      max: 140, 
      unit: 'mmHg', 
      status: 'normal', 
      trend: 'down',
      icon: Heart,
      color: 'text-red-500'
    },
    { 
      name: 'Blood Sugar', 
      value: 95, 
      max: 140, 
      unit: 'mg/dL', 
      status: 'normal', 
      trend: 'stable',
      icon: Activity,
      color: 'text-blue-500'
    },
    { 
      name: 'Weight', 
      value: 72, 
      max: 100, 
      unit: 'kg', 
      status: 'normal', 
      trend: 'down',
      icon: BarChart3,
      color: 'text-green-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-mint-50">
      {/* Header */}
      <header className="glass border-b border-white/20 sticky top-0 z-40 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo variant="gradient" size="sm" showText={false} className="hover-scale cursor-pointer" />
            
            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search reports, vitals..."
                  className="w-full pl-10 pr-4 py-2 bg-white/50 border border-white/40 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover-lift relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              </Button>
              <Avatar 
                className="cursor-pointer hover-scale border-2 border-white/40" 
                onClick={() => onNavigate('profile')}
              >
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                  S
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        {/* Welcome Section */}
        <div className="animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Hi Shibil 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Your Health Summary / Aapka Sehat ka Khulasa
          </p>
        </div>

        {/* Quick Actions - Floating Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <Card 
            className="glass border-2 border-white/40 hover-lift hover:border-accent/30 transition-all duration-300 cursor-pointer group" 
            style={{ borderRadius: '20px' }}
            onClick={() => onNavigate('upload')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-1">Upload Report</h3>
                  <p className="text-sm text-muted-foreground">Report Upload karo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="glass border-2 border-white/40 hover-lift hover:border-accent/30 transition-all duration-300 cursor-pointer group" 
            style={{ borderRadius: '20px' }}
            onClick={() => onNavigate('vitals')}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PlusCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-1">Add Manual Vitals</h3>
                  <p className="text-sm text-muted-foreground">Vitals Add karo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column: Vitals & AI Insights */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Insights Preview */}
            <Card 
              className="glass border-2 border-white/40 shadow-xl animate-slide-up" 
              style={{ borderRadius: '20px', animationDelay: '200ms' }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  AI Insights Preview
                </CardTitle>
                <CardDescription>Latest analysis from Gemini AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-5 rounded-2xl border border-accent/20 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">
                        Your last blood test analysis
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Hemoglobin slightly low</strong> (11.8 g/dL). 
                        Consider iron-rich foods like spinach, lentils, and red meat. Other parameters are normal.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        Aapki last report mein Hb thoda kam hai. Iron-wali cheezein khayein jaise palak, daal.
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="text-accent p-0 h-auto hover:text-accent/80"
                    onClick={() => onNavigate('report')}
                  >
                    View Full Analysis →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card 
              className="glass border-2 border-white/40 shadow-xl animate-slide-up" 
              style={{ borderRadius: '20px', animationDelay: '300ms' }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Recent Reports</CardTitle>
                      <CardDescription>Aapki recent reports</CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="link"
                    className="text-accent p-0"
                    onClick={() => onNavigate('timeline')}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentReports.map((report, idx) => (
                  <div
                    key={report.id}
                    className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl hover:bg-white/80 hover-lift transition-all duration-200 cursor-pointer group border border-white/40"
                    onClick={() => onNavigate('report')}
                    style={{ animationDelay: `${300 + idx * 50}ms` }}
                  >
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-200">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-sm font-semibold text-primary truncate">{report.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </p>
                      <p className="text-xs text-accent truncate">{report.insight}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Vitals Overview */}
          <div className="space-y-6">
            <Card 
              className="glass border-2 border-white/40 shadow-xl animate-slide-up sticky top-24" 
              style={{ borderRadius: '20px', animationDelay: '250ms' }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Activity className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle>Vitals Overview</CardTitle>
                      <CardDescription>Latest readings</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {vitals.map((vital, idx) => (
                  <div 
                    key={vital.name} 
                    className="space-y-3 p-4 bg-white/40 rounded-xl hover:bg-white/60 transition-all duration-200"
                    style={{ animationDelay: `${250 + idx * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-white/80 ${vital.color}`}>
                          <vital.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-primary">{vital.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {vital.value} <span className="text-xs text-muted-foreground">{vital.unit}</span>
                        </span>
                        {vital.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </div>
                    <Progress 
                      value={(vital.value / vital.max) * 100} 
                      className="h-2" 
                    />
                    <p className="text-xs text-muted-foreground">
                      {vital.status === 'normal' ? '✓ Normal range' : '⚠ Needs attention'}
                    </p>
                  </div>
                ))}
                
                <Button
                  variant="outline"
                  className="w-full rounded-xl hover-lift mt-4"
                  onClick={() => onNavigate('timeline')}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Detailed Charts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Mobile) */}
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl hover-lift animate-pulse-glow lg:hidden bg-gradient-to-br from-primary to-accent"
        onClick={() => onNavigate('upload')}
      >
        <Upload className="w-6 h-6" />
      </Button>
    </div>
  );
}
