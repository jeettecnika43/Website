import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, CheckCircle, Award, Shield } from 'lucide-react';

export default function About() {
  const values = [
    "Integrity & Transparency",
    "Commitment to Quality", 
    "Customer Satisfaction",
    "Innovation & Safety",
    "Environmental Responsibility",
    "Teamwork & Collaboration",
    "Respect & Inclusion",
    "Social Impact",
    "Reliability & Accountability",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About JEETTECNIKA</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            M/S JEETTECNIKA is a professionally managed partnership firm, established on November 24, 2020, 
            and registered under the Indian Partnership Act, 1932. Headquartered in Saran, Bihar, near the 
            strategic Rail Wheel Plant (RWP), Bela, JEETTECNIKA has rapidly emerged as a trusted and innovative 
            engineering solutions provider, specializing in comprehensive services for Indian Railways and allied industries.
          </p>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <Card className="h-full">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted and innovative partner in engineering solutions for Indian Railways 
                and allied industries—championing operational excellence, sustainability, and positive transformation 
                in every project we deliver.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="h-full">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class, cost-effective, and eco-friendly engineering services that exceed client 
                expectations, drive technological advancement, and build skilled local teams while integrating 
                sustainable practices at every level.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="h-full">
            <CardContent className="p-8 text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h3>
              <div className="text-left space-y-2">
                {values.slice(0, 6).map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Legal Identity</h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Firm Name:</span> M/S JEETTECNIKA</p>
                <p><span className="font-semibold">Registered Under:</span> Indian Partnership Act, 1932</p>
                <p><span className="font-semibold">Date of Incorporation:</span> November 24, 2020</p>
                <p><span className="font-semibold">GSTIN:</span> 10AAQFJ6650B1ZO</p>
                <p><span className="font-semibold">PAN:</span> AAQFJ6650B</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                    <p className="text-sm text-gray-600">Quality Management System</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Railway Standards</p>
                    <p className="text-sm text-gray-600">RDSO, ICF, and RWP Bela compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}