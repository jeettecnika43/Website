import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wrench, 
  Settings, 
  Truck, 
  Users, 
  FileText, 
  Building,
  Cog,
  Shield
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cog,
      title: "Turnkey Contract Services",
      description: "End-to-end project delivery for railway and industrial clients, including planning, execution, and commissioning of electrical, mechanical, and civil engineering works."
    },
    {
      icon: Wrench,
      title: "Annual Maintenance Contracts (AMC)",
      description: "Preventive and corrective maintenance services for electrical and mechanical panels, machinery, and allied facilities with scheduled inspections and timely repairs."
    },
    {
      icon: Settings,
      title: "Customized Industrial Solutions",
      description: "Development and deployment of client-specific engineering services, including on-site technical support, process optimization, and innovative problem-solving."
    },
    {
      icon: Users,
      title: "Authorized Representative Services",
      description: "Acting as trusted partner and official liaison for reputed brands and suppliers within the railway and industrial ecosystem."
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "Reliable sourcing and timely delivery of electrical, mechanical, and civil components, including specialized refractory products crucial to railway operations."
    },
    {
      icon: FileText,
      title: "Technical Consultation",
      description: "Expert advisory services for project planning, engineering designs, compliance audits, and regulatory adherence to improve operational efficiency."
    },
    {
      icon: Building,
      title: "Facility Management",
      description: "Comprehensive facility upkeep covering electrical distribution, mechanical operations, infrastructure maintenance, and safety management."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified quality management ensuring compliance with RDSO, ICF, and RWP Bela standards throughout all operations."
    }
  ];

  const industries = [
    "Indian Railways (workshops, plants)",
    "Heavy Engineering & Manufacturing", 
    "Power & Energy Sector",
    "Public Sector Undertakings & Government Projects",
    "Private Industrial Clients"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg text-gray-700">
            Comprehensive engineering solutions tailored to meet the dynamic needs of railway and industrial sectors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Industries Served</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                  <span className="text-gray-800 font-medium">{industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}