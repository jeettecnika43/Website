import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  User,
  Building2,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields (Name, Email, and Message)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Success message
    toast.success('Thank you for your message! We will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Mohan Kothiya, Akbarpur Panchayat",
        "Dariyapur Block, Saran, Bihar – 841207"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9852800116"]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "contact@jeettecnika.in",
        "info@jeettecnika.in", 
        "projects@jeettecnika.in"
      ]
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.jeettecnika.in"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Ready to discuss your engineering needs? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                We're here to help with all your railway and industrial engineering requirements. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600" />
                  <span>Leadership Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-700">
                  <p className="font-semibold">Mr. Bishwajeet Kumar Sharma</p>
                  <p className="text-sm">Partner & Official Liaison for Zircar Refractories Ltd.</p>
                  <p className="text-sm mt-1">20+ years of experience in railway and industrial engineering</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input 
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91-XXXXXXXXXX" 
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="turnkey">Turnkey Contract Services</option>
                      <option value="amc">Annual Maintenance Contracts</option>
                      <option value="industrial">Industrial Solutions</option>
                      <option value="supply">Supply Chain Management</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="facility">Facility Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, project details, or any questions you have..." 
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Registration Info */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Legal Entity</h4>
              <p className="text-sm text-gray-600">Registered under Indian Partnership Act, 1932</p>
              <p className="text-sm text-gray-600">Established: November 24, 2020</p>
            </div>
            <div>
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">GSTIN</h4>
              <p className="text-sm text-gray-600">10AAQFJ6650B1ZO</p>
              <p className="text-sm text-gray-600">PAN: AAQFJ6650B</p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-semibold text-gray-900">Quick Response</h4>
              <p className="text-sm text-gray-600">24-hour response guarantee</p>
              <p className="text-sm text-gray-600">Emergency support available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}