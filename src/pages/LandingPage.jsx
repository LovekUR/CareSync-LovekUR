import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  CheckIcon,
  StarIcon,
  PlayIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  UsersIcon,
  HeartIcon,
  BellIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PlusCircleIcon,
  ExclamationTriangleIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
  CalendarDaysIcon,
  LockClosedIcon,
  ClockIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { Typewriter } from "react-simple-typewriter";
import StatsSection from "./StatsSection";
import Pricing from "./PriceSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Contributor from "../components/common/Contributor";
import { useTheme } from "../contexts/ThemeContext";
import ContactUs from "./ContactUs";
import Navbar from "../components/common/Navbar";
import CalendarModal from "../components/common/CalendarModal";
import Feature from "./Feature";


const LandingPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  const { user, loading } = useAuth();

  const handleScheduleDemoClick = () => {
    setIsCalendarOpen(true);
  };

  const handleCalendarClose = () => {
    setIsCalendarOpen(false);
  };

  const handleDateSelection = (selectedDate) => {
    console.log("Selected demo date:", selectedDate);
    setIsCalendarOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Professional Hero Section */}
  <section
  id="home"
  className="relative pt-24 pb-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden"
>
  {/* BACKGROUND DECOR */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 dark:from-emerald-400/5 dark:to-teal-400/5 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-blue-400/10 dark:from-teal-400/5 dark:to-blue-400/5 rounded-full blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left space-y-16">
    {/* Intro */}
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-emerald-200 dark:border-emerald-800">
        <ShieldCheckIcon className="w-4 h-4 mr-2" />
        Trusted by 500+ Healthcare Providers
      </div>
      <h1 className="text-6xl lg:text-8xl font-black text-gray-900 dark:text-gray-100 leading-tight">
        Healthcare
        <span className="gradient-accent bg-clip-text text-transparent"> Management </span>
        Made Simple
      </h1>
      <p className="text-lg lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
        Streamline patient care with our comprehensive healthcare platform. Connect doctors, patients, and pharmacies in one secure ecosystem.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <Link to="/register" className="gradient-accent text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
          Start Free Trial <ArrowRightIcon className="inline ml-2 h-5 w-5" />
        </Link>
        <button onClick={() => setIsVideoPlaying(true)} className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-bold text-lg transition-all duration-300">
          <PlayIcon className="h-5 w-5 inline mr-2" /> Watch Demo
        </button>
      </div>
    </div>

    {/* DASHBOARD PANEL */}
    <div className="w-full flex justify-center">
      <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 border border-white/50 dark:border-gray-700/50 rounded-3xl px-8 py-12 shadow-2xl w-full lg:w-10/12 xl:w-8/12 space-y-10">
        {/* Stats */}
        <div className="flex gap-8 flex-wrap justify-center lg:justify-between">
          {[
            { label: "Today's Appointments", value: "12", icon: CalendarDaysIcon },
            { label: "Pending Reports", value: "5", icon: DocumentTextIcon },
            { label: "Active Patients", value: "1,247", icon: UserGroupIcon },
            { label: "Urgent Cases", value: "3", icon: ExclamationTriangleIcon }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-xl flex items-center justify-center bg-white/80 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                <stat.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <Link
            to={user ? `/${user.role}` : "/register"}
            className="gradient-accent flex items-center justify-center text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap"
          >
            {user ? "Go to Dashboard" : "Get Started"} <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <Feature />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Professional CTA Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">
            Ready to Transform
            <br className="hidden sm:block" />
            Your Healthcare Practice?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
            Join over 500 healthcare providers who have transformed their
            patient care with CareSync's comprehensive platform
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              to="/register"
              className="bg-white text-emerald-600 px-10 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-xl"
            >
              Start Free Trial Today
            </Link>

            <button
              onClick={handleScheduleDemoClick}
              className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 font-bold text-lg backdrop-blur-sm"
            >
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/80 font-medium">
            <span className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              HIPAA Compliant
            </span>
            <span className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              30-day free trial
            </span>
            <span className="flex items-center">
              <CheckIcon className="h-5 w-5 mr-2" />
              24/7 support
            </span>
          </div>
        </div>
      </section>

      {/* Contributor */}
      <Contributor />
      
      {/* Contact Us */}
      <ContactUs />
      
      {/* Footer */}
      <Footer />

      {/* Professional Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-4xl w-full transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                CareSync Platform Demo
              </h3>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <PlayIcon className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Healthcare platform demo video
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  See how CareSync transforms patient care
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      {isCalendarOpen && (
        <CalendarModal
          onClose={handleCalendarClose}
          onSelectDate={handleDateSelection}
        />
      )}
    </div>
  );
};

export default LandingPage;
