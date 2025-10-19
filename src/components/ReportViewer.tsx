import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ArrowLeft, FileText, AlertCircle, Apple, Home as HomeIcon, MessageSquare } from 'lucide-react';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface ReportViewerProps {
  onNavigate: (page: string) => void;
}

export function ReportViewer({ onNavigate }: ReportViewerProps) {
  const [activeTab, setActiveTab] = useState('english');

  const reportData = {
    title: 'Blood Test Report',
    date: '15 October 2025',
    keyFindings: [
      { label: 'Hemoglobin (Hb)', value: '11.8 g/dL', status: 'low', normal: '12-16 g/dL' },
      { label: 'White Blood Cells', value: '7,500/μL', status: 'normal', normal: '4,000-11,000/μL' },
      { label: 'Platelets', value: '250,000/μL', status: 'normal', normal: '150,000-450,000/μL' },
      { label: 'Blood Sugar (Fasting)', value: '95 mg/dL', status: 'normal', normal: '70-100 mg/dL' },
    ],
    summary: {
      english: "Your blood test shows that your hemoglobin levels are slightly below the normal range. This could indicate mild anemia. Your blood sugar and other parameters are within normal limits.",
      urdu: "Aapke blood test mein hemoglobin level thoda kam hai. Ye mild anemia ho sakta hai. Baaki sab cheezein normal range mein hain."
    },
    doctorQuestions: {
      english: [
        "Am I anemic? Do I need iron supplements?",
        "Should I change my diet?",
        "When should I get retested?",
        "Are there any other tests I should do?"
      ],
      urdu: [
        "Kya mujhe anemia hai? Iron supplements lene chahiye?",
        "Kya mujhe diet change karni chahiye?",
        "Dobara test kab karwana chahiye?",
        "Aur koi test karwana chahiye?"
      ]
    },
    foodSuggestions: {
      english: [
        "Iron-rich foods: Spinach, lentils, red meat, eggs",
        "Vitamin C foods: Oranges, tomatoes, bell peppers (helps iron absorption)",
        "Avoid tea/coffee with meals (reduces iron absorption)",
        "Include beetroot, pomegranate, and dates"
      ],
      urdu: [
        "Iron wali cheezein: Palak, daal, gosht, ande",
        "Vitamin C: Santre, tamatar, shimla mirch (iron ko absorb karne mein madad)",
        "Khane ke saath chai/coffee na piyein",
        "Chukandar, anaar, aur khajoor khayein"
      ]
    },
    homeRemedies: {
      english: [
        "Drink a glass of beetroot juice daily",
        "Soak 5-6 raisins and almonds overnight, eat in the morning",
        "Have a spoonful of blackstrap molasses daily",
        "Practice deep breathing exercises for better oxygen flow"
      ],
      urdu: [
        "Rozana ek glass chukandar ka juice piyein",
        "5-6 kishmish aur badam raat ko bhigo kar subah khayein",
        "Rozana ek chammach gur khayein",
        "Gehri saans lene ki exercise karein"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-green-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl md:text-3xl">AI Report Summary</h1>
          <p className="text-white/90">AI se report analysis</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Report Preview */}
          <Card className="shadow-lg h-fit sticky top-6" style={{ borderRadius: '24px' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Report Preview
              </CardTitle>
              <CardDescription>{reportData.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 aspect-[3/4] flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">{reportData.title}</p>
                  <p className="text-sm text-gray-500 mt-2">PDF Preview</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right: AI Summary */}
          <div className="space-y-6">
            {/* Language Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 rounded-xl">
                <TabsTrigger value="english" className="rounded-lg">English</TabsTrigger>
                <TabsTrigger value="urdu" className="rounded-lg">Roman Urdu</TabsTrigger>
              </TabsList>

              <TabsContent value="english" className="space-y-6 mt-6">
                {/* Key Findings */}
                <Card className="shadow-md" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Key Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {reportData.keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
                        <div>
                          <p className="text-sm">{finding.label}</p>
                          <p className="text-xs text-muted-foreground">Normal: {finding.normal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{finding.value}</p>
                          <Badge variant={finding.status === 'normal' ? 'default' : 'destructive'} className="mt-1">
                            {finding.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Summary */}
                <Card className="shadow-md bg-gradient-to-br from-blue-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{reportData.summary.english}</p>
                  </CardContent>
                </Card>

                {/* Doctor Questions */}
                <Card className="shadow-md" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Questions to Ask Your Doctor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.doctorQuestions.english.map((q, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Food Suggestions */}
                <Card className="shadow-md bg-gradient-to-br from-green-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Apple className="w-5 h-5 text-primary" />
                      Food Suggestions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.foodSuggestions.english.map((food, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-green-600">✓</span>
                          <span>{food}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Home Remedies */}
                <Card className="shadow-md bg-gradient-to-br from-yellow-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HomeIcon className="w-5 h-5 text-primary" />
                      Home Remedies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.homeRemedies.english.map((remedy, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-yellow-600">→</span>
                          <span>{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="urdu" className="space-y-6 mt-6">
                {/* Key Findings - Same as English */}
                <Card className="shadow-md" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-primary" />
                      Zaroori Findings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {reportData.keyFindings.map((finding, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-xl">
                        <div>
                          <p className="text-sm">{finding.label}</p>
                          <p className="text-xs text-muted-foreground">Normal: {finding.normal}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{finding.value}</p>
                          <Badge variant={finding.status === 'normal' ? 'default' : 'destructive'} className="mt-1">
                            {finding.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Summary */}
                <Card className="shadow-md bg-gradient-to-br from-blue-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{reportData.summary.urdu}</p>
                  </CardContent>
                </Card>

                {/* Doctor Questions */}
                <Card className="shadow-md" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Doctor se ye sawal puchein
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.doctorQuestions.urdu.map((q, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-primary">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Food Suggestions */}
                <Card className="shadow-md bg-gradient-to-br from-green-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Apple className="w-5 h-5 text-primary" />
                      Khane ki Salah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.foodSuggestions.urdu.map((food, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-green-600">✓</span>
                          <span>{food}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Home Remedies */}
                <Card className="shadow-md bg-gradient-to-br from-yellow-50 to-white" style={{ borderRadius: '20px' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HomeIcon className="w-5 h-5 text-primary" />
                      Gharelu Ilaaj
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {reportData.homeRemedies.urdu.map((remedy, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <span className="text-yellow-600">→</span>
                          <span>{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Disclaimer */}
            <Card className="shadow-md bg-red-50 border-red-200" style={{ borderRadius: '20px' }}>
              <CardContent className="p-6">
                <p className="text-sm text-red-900">
                  <strong>Important Note:</strong> Always consult your doctor before making any medical decisions. This AI summary is for understanding purposes only.
                </p>
                <Separator className="my-3 bg-red-200" />
                <p className="text-sm text-red-800">
                  <strong>Zaroori Note:</strong> Koi bhi faisla karne se pehle apne doctor se zaroor baat karein. Ye AI summary sirf samajhne ke liye hai.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
