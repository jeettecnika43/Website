import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Engineering Trust.
            <br />
            <span className="text-yellow-400">Delivering Excellence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Comprehensive engineering solutions for Indian Railways and allied industries. 
            Specialized in turnkey projects, maintenance contracts, and innovative industrial solutions.
          </p>



          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-3">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold">ISO 9001:2015</div>
              <div className="text-blue-200">Certified Quality</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-3">
                <Shield className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold">4+ Years</div>
              <div className="text-blue-200">Industry Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-full mb-3">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-200">Skilled Workforce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}