import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  TrendingDown, 
  Truck, 
  Users, 
  Handshake, 
  Shield,
  Calendar,
  Target
} from 'lucide-react';

export default function Projects() {
  const achievements = [
    {
      icon: Award,
      title: "Recognition for Excellence",
      description: "Formally recognized by Rail Wheel Plant (RWP) Bela for consistently delivering projects on time while maintaining exceptional quality and service standards.",
      year: "2022"
    },
    {
      icon: TrendingDown,
      title: "Cost Reduction Innovation",
      description: "Implemented eco-friendly NWK-99 OPP cleaning solution, achieving 15% reduction in maintenance costs and improved operational efficiency.",
      metric: "15% Cost Reduction"
    },
    {
      icon: Truck,
      title: "Supply Chain Excellence", 
      description: "Collaborated with Zircar Refractories Ltd. ensuring uninterrupted supply of refractory components, enabling zero downtime in critical manufacturing processes.",
      metric: "Zero Downtime"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Successfully trained over 50 local youths in technical skills, contributing to employment generation and socio-economic upliftment in Bihar.",
      metric: "50+ Trained"
    },
    {
      icon: Handshake,
      title: "Long-Term Partnerships",
      description: "Built strong and lasting partnerships with clients based on quality and reliability, resulting in sustained repeat business and trusted referrals.",
      metric: "100% Client Retention"
    },
    {
      icon: Shield,
      title: "Quality Certification",
      description: "Achieved internationally recognized ISO 9001:2015 certification for quality management systems, demonstrating commitment to excellence.",
      year: "2023"
    }
  ];

  const upcomingProjects = [
    {
      title: "Panel Cleaning at RWP Bela",
      description: "Comprehensive cleaning of electrical and mechanical panels using eco-friendly NWK-99 OPP solution",
      benefits: ["20% panel lifespan improvement", "15% maintenance cost reduction", "Enhanced operational reliability"],
      status: "Upcoming"
    },
    {
      title: "Zircar Refractories Supply Coordination",
      description: "Strengthening liaison and supply coordination for high-quality clay-graphite refractory components",
      benefits: ["Uninterrupted delivery", "Zero downtime maintenance", "Enhanced production efficiency"],
      status: "In Progress"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Achievements & Projects</h2>
          <p className="text-lg text-gray-700">
            Demonstrating excellence through successful project delivery and continuous innovation
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <achievement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  {achievement.year && (
                    <Badge variant="secondary">{achievement.year}</Badge>
                  )}
                  {achievement.metric && (
                    <Badge variant="default" className="bg-green-600">{achievement.metric}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg text-gray-900">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Upcoming Projects</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <Badge 
                      variant={project.status === "Upcoming" ? "secondary" : "default"}
                      className={project.status === "In Progress" ? "bg-green-600" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2 text-green-600" />
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {project.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <blockquote className="text-xl md:text-2xl font-medium mb-4 italic">
            "M/S JEETTECNIKA's timely and high-quality services, combined with Mr. Bishwajeet Kumar Sharma's 
            effective liaison for Zircar Refractories Ltd., have significantly enhanced our operational 
            efficiency at RWP Bela."
          </blockquote>
          <cite className="text-yellow-400 font-semibold">— RWP Bela Official</cite>
        </div>
      </div>
    </section>
  );
}