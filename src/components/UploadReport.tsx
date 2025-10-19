import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Upload, FileText, ArrowLeft, Loader2, Sparkles, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Logo } from './Logo';

interface UploadReportProps {
  onNavigate: (page: string) => void;
}

type UploadState = 'idle' | 'dragging' | 'uploading' | 'analyzing' | 'success' | 'error';

export function UploadReport({ onNavigate }: UploadReportProps) {
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [reportType, setReportType] = useState('blood');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    // Validate file
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setUploadState('error');
      return;
    }

    if (file.size > maxSize) {
      setUploadState('error');
      return;
    }

    setSelectedFile(file);
    setUploadState('idle');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setUploadState('dragging');
  };

  const handleDragLeave = () => {
    setUploadState(selectedFile ? 'idle' : 'idle');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;

    setUploadState('uploading');
    setUploadProgress(0);
    
    // Simulate upload
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setUploadState('analyzing');
          
          // Simulate AI analysis
          setTimeout(() => {
            setUploadState('success');
            setTimeout(() => {
              onNavigate('report');
            }, 1500);
          }, 2000);
          
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadState('idle');
    setUploadProgress(0);
  };

  const getStateStyles = () => {
    switch (uploadState) {
      case 'dragging':
        return 'border-accent bg-accent/5 scale-[1.02]';
      case 'uploading':
      case 'analyzing':
        return 'border-primary bg-primary/5';
      case 'success':
        return 'border-green-500 bg-green-50';
      case 'error':
        return 'border-red-500 bg-red-50';
      default:
        return 'border-primary/30 hover:border-accent/60';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-mint-50">
      {/* Header */}
      <header className="glass border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover-lift"
              onClick={() => onNavigate('dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Logo variant="gradient" size="sm" showText={false} />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-primary">Upload Report</h1>
              <p className="text-xs text-muted-foreground">Report Upload karo</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
        {/* Main Upload Card */}
        <Card className="glass border-2 border-white/40 shadow-2xl animate-scale-in" style={{ borderRadius: '24px' }}>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-2xl">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle>Upload Medical Report</CardTitle>
                <CardDescription>
                  PDF ya image upload karein for AI analysis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Drag & Drop Area */}
            <div
              className={`
                border-2 border-dashed rounded-2xl p-8 md:p-12 text-center 
                transition-all duration-300 relative overflow-hidden
                ${getStateStyles()}
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                id="file-upload"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                disabled={uploadState === 'uploading' || uploadState === 'analyzing'}
              />

              {/* Upload States */}
              {uploadState === 'idle' || uploadState === 'dragging' ? (
                <label 
                  htmlFor="file-upload" 
                  className="cursor-pointer block"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`
                      bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-full
                      transition-transform duration-300
                      ${uploadState === 'dragging' ? 'scale-110' : 'scale-100'}
                    `}>
                      <Upload className={`w-12 h-12 text-primary ${uploadState === 'dragging' ? 'animate-bounce' : ''}`} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {selectedFile ? selectedFile.name : 'Drag & Drop your report here'}
                      </p>
                      <p className="text-sm text-muted-foreground mb-1">
                        or click to browse files
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports PDF, JPG, PNG (max 10MB)
                      </p>
                    </div>
                    {selectedFile && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFile();
                        }}
                        className="rounded-full"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Remove file
                      </Button>
                    )}
                  </div>
                </label>
              ) : uploadState === 'uploading' ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-primary/10 p-6 rounded-full">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  </div>
                  <div className="w-full max-w-md space-y-2">
                    <p className="text-lg font-semibold text-primary">Uploading...</p>
                    <Progress value={uploadProgress} className="h-3" />
                    <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
                  </div>
                </div>
              ) : uploadState === 'analyzing' ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="bg-accent/10 p-6 rounded-full">
                      <Sparkles className="w-12 h-12 text-accent animate-pulse-glow" />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-accent/20" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-accent mb-2">Analyzing with Gemini AI...</p>
                    <p className="text-sm text-muted-foreground">
                      Processing your report • ETA: ~30 seconds
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              ) : uploadState === 'success' ? (
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-green-100 p-6 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-700 mb-2">Analysis Complete!</p>
                    <p className="text-sm text-muted-foreground">
                      Redirecting to report summary...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-red-100 p-6 rounded-full">
                    <AlertCircle className="w-12 h-12 text-red-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-red-700 mb-2">Upload Failed</p>
                    <p className="text-sm text-muted-foreground">
                      Please check file type and size, then try again
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleRemoveFile}
                    className="rounded-full"
                  >
                    Try Again
                  </Button>
                </div>
              )}
            </div>

            {/* File Details */}
            {selectedFile && uploadState === 'idle' && (
              <div className="flex items-center gap-3 p-4 bg-white/60 rounded-xl border border-white/40 animate-slide-up">
                <FileText className="w-10 h-10 text-primary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-primary truncate">{selectedFile.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • {selectedFile.type}
                  </p>
                </div>
                <Badge variant="secondary">Ready</Badge>
              </div>
            )}

            {/* Report Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Report Date</Label>
                <Input
                  id="date"
                  type="date"
                  className="rounded-xl h-11 bg-white/60 border-white/40"
                  defaultValue="2025-10-18"
                  disabled={uploadState === 'uploading' || uploadState === 'analyzing'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Report Type</Label>
                <Select 
                  value={reportType} 
                  onValueChange={setReportType}
                  disabled={uploadState === 'uploading' || uploadState === 'analyzing'}
                >
                  <SelectTrigger className="rounded-xl h-11 bg-white/60 border-white/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blood">🩸 Blood Test</SelectItem>
                    <SelectItem value="xray">📷 X-Ray</SelectItem>
                    <SelectItem value="ultrasound">🔊 Ultrasound</SelectItem>
                    <SelectItem value="mri">🧲 MRI Scan</SelectItem>
                    <SelectItem value="ct">💿 CT Scan</SelectItem>
                    <SelectItem value="ecg">❤️ ECG</SelectItem>
                    <SelectItem value="prescription">💊 Prescription</SelectItem>
                    <SelectItem value="other">📄 Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={!selectedFile || uploadState !== 'idle'}
              className="w-full h-12 rounded-xl gap-2 hover-lift shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Analyze with Gemini AI
            </Button>

            {/* Info Notes */}
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <p className="text-sm text-yellow-900 mb-1">
                  <strong>⚠️ Disclaimer:</strong> AI analysis is for understanding only.
                </p>
                <p className="text-sm text-yellow-800">
                  Always consult your doctor before making any health decisions. • 
                  AI sirf samajhne ke liye hai. Doctor se zaroor consult karein.
                </p>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                <p className="text-sm text-primary">
                  <strong>🔒 Privacy:</strong> Your data is encrypted and stored securely. 
                  We use signed URLs and never share your medical information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
