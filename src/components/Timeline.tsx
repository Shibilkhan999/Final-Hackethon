import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, FileText, Heart, Calendar } from 'lucide-react';

interface TimelineProps {
  onNavigate: (page: string) => void;
}

export function Timeline({ onNavigate }: TimelineProps) {
  const timelineData = [
    {
      id: 1,
      type: 'report',
      title: 'Blood Test Report',
      date: '15 Oct 2025',
      time: '10:30 AM',
      summary: 'Hemoglobin slightly low (11.8 g/dL). Other parameters normal.',
      summaryUrdu: 'Hb thoda kam hai (11.8). Baaki sab normal hai.',
      status: 'analyzed'
    },
    {
      id: 2,
      type: 'vitals',
      title: 'Manual Vitals Entry',
      date: '14 Oct 2025',
      time: '08:00 AM',
      data: {
        bp: '118/78 mmHg',
        sugar: '92 mg/dL',
        weight: '72 kg'
      },
      status: 'recorded'
    },
    {
      id: 3,
      type: 'report',
      title: 'X-Ray Chest',
      date: '10 Oct 2025',
      time: '02:15 PM',
      summary: 'No abnormalities detected. Lungs are clear.',
      summaryUrdu: 'Koi masla nahi mila. Phephray saaf hain.',
      status: 'analyzed'
    },
    {
      id: 4,
      type: 'vitals',
      title: 'Manual Vitals Entry',
      date: '8 Oct 2025',
      time: '07:30 AM',
      data: {
        bp: '120/80 mmHg',
        sugar: '95 mg/dL',
        weight: '73 kg'
      },
      status: 'recorded'
    },
    {
      id: 5,
      type: 'report',
      title: 'Lipid Profile',
      date: '5 Oct 2025',
      time: '11:00 AM',
      summary: 'Total cholesterol within limits. HDL good, LDL normal.',
      summaryUrdu: 'Cholesterol normal hai. HDL acha hai, LDL bhi theek hai.',
      status: 'analyzed'
    },
    {
      id: 6,
      type: 'vitals',
      title: 'Manual Vitals Entry',
      date: '1 Oct 2025',
      time: '08:15 AM',
      data: {
        bp: '122/82 mmHg',
        sugar: '98 mg/dL',
        weight: '73.5 kg'
      },
      status: 'recorded'
    }
  ];

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
          <h1 className="text-2xl md:text-3xl">Health Timeline</h1>
          <p className="text-white/90">Apni health history dekhein</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-green-400 to-green-200" />

          {/* Timeline Items */}
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative pl-12 md:pl-16">
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-2 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-md">
                  {item.type === 'report' ? (
                    <FileText className="w-4 h-4 text-primary" />
                  ) : (
                    <Heart className="w-4 h-4 text-primary" />
                  )}
                </div>

                {/* Timeline Card */}
                <Card 
                  className="shadow-md hover:shadow-lg transition-all cursor-pointer" 
                  style={{ borderRadius: '20px' }}
                  onClick={() => item.type === 'report' && onNavigate('report')}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3" />
                          {item.date} • {item.time}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={item.type === 'report' ? 'default' : 'secondary'}
                        className="rounded-full"
                      >
                        {item.type === 'report' ? '📄 Report' : '❤️ Vitals'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.type === 'report' ? (
                      <div className="space-y-2">
                        <div className="bg-secondary/30 p-3 rounded-xl">
                          <p className="text-sm mb-1">{item.summary}</p>
                          <p className="text-xs text-muted-foreground italic">{item.summaryUrdu}</p>
                        </div>
                        <Button 
                          variant="link" 
                          className="text-primary p-0 h-auto"
                          onClick={() => onNavigate('report')}
                        >
                          View Full Analysis →
                        </Button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-red-50 p-3 rounded-xl text-center">
                          <p className="text-xs text-muted-foreground mb-1">BP</p>
                          <p className="text-sm">{item.data?.bp}</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-xl text-center">
                          <p className="text-xs text-muted-foreground mb-1">Sugar</p>
                          <p className="text-sm">{item.data?.sugar}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-xl text-center">
                          <p className="text-xs text-muted-foreground mb-1">Weight</p>
                          <p className="text-sm">{item.data?.weight}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* End of Timeline */}
          <div className="relative pl-12 md:pl-16 mt-6">
            <div className="absolute left-0 md:left-2 w-8 h-8 rounded-full bg-gradient-to-br from-green-200 to-green-100 border-2 border-green-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-sm text-muted-foreground">Start of your health journey</p>
            <p className="text-xs text-muted-foreground">Aapki sehat ki kahani yahan se shuru hui</p>
          </div>
        </div>
      </div>
    </div>
  );
}
