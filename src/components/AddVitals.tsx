import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Heart, Droplet, Weight, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AddVitalsProps {
  onNavigate: (page: string) => void;
}

export function AddVitals({ onNavigate }: AddVitalsProps) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    systolic: '',
    diastolic: '',
    sugar: '',
    weight: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Vitals saved successfully! / Vitals save ho gaye!');
    setTimeout(() => {
      onNavigate('dashboard');
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h1 className="text-2xl md:text-3xl">Add Manual Vitals</h1>
          <p className="text-white/90">Apne vitals manually add karein</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date */}
          <Card className="shadow-md" style={{ borderRadius: '20px' }}>
            <CardHeader>
              <CardTitle className="text-lg">Date / Tarikh</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="rounded-xl h-12"
              />
            </CardContent>
          </Card>

          {/* Blood Pressure */}
          <Card className="shadow-md" style={{ borderRadius: '20px' }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-red-100 p-2 rounded-xl">
                  <Heart className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Blood Pressure</CardTitle>
                  <CardDescription>BP (Systolic/Diastolic)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="systolic">Systolic (Upper)</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="120"
                    value={formData.systolic}
                    onChange={(e) => handleChange('systolic', e.target.value)}
                    className="rounded-xl h-11"
                  />
                  <p className="text-xs text-muted-foreground">Normal: 90-120</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diastolic">Diastolic (Lower)</Label>
                  <Input
                    id="diastolic"
                    type="number"
                    placeholder="80"
                    value={formData.diastolic}
                    onChange={(e) => handleChange('diastolic', e.target.value)}
                    className="rounded-xl h-11"
                  />
                  <p className="text-xs text-muted-foreground">Normal: 60-80</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blood Sugar */}
          <Card className="shadow-md" style={{ borderRadius: '20px' }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-xl">
                  <Droplet className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Blood Sugar</CardTitle>
                  <CardDescription>Fasting blood glucose (mg/dL)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                id="sugar"
                type="number"
                placeholder="95"
                value={formData.sugar}
                onChange={(e) => handleChange('sugar', e.target.value)}
                className="rounded-xl h-11"
              />
              <p className="text-xs text-muted-foreground">Normal: 70-100 mg/dL (fasting)</p>
            </CardContent>
          </Card>

          {/* Weight */}
          <Card className="shadow-md" style={{ borderRadius: '20px' }}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-2 rounded-xl">
                  <Weight className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">Weight / Wazn</CardTitle>
                  <CardDescription>Your current weight (kg)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Input
                id="weight"
                type="number"
                placeholder="72"
                value={formData.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                className="rounded-xl h-11"
              />
              <p className="text-xs text-muted-foreground">Enter weight in kilograms</p>
            </CardContent>
          </Card>

          {/* Notes */}
          <Card className="shadow-md" style={{ borderRadius: '20px' }}>
            <CardHeader>
              <CardTitle className="text-lg">Additional Notes</CardTitle>
              <CardDescription>Koi aur jaankari (optional)</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                id="notes"
                placeholder="Any symptoms, medications, or observations..."
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                className="rounded-xl min-h-24"
              />
            </CardContent>
          </Card>

          {/* Save Button */}
          <Button type="submit" className="w-full h-12 rounded-xl gap-2">
            <Save className="w-5 h-5" />
            Save Vitals / Vitals Save karein
          </Button>
        </form>
      </div>
    </div>
  );
}
