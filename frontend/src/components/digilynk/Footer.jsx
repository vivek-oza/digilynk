import React from "react";
import digiLynkLight from "../../assets/icons/digilynk_light.svg";
import digiLynkDark from "../../assets/icons/digilynk_dark.png";
import {
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
  Mail,
} from "lucide-react";
import GradientText from "../reactbits/TextAnimations/GradientText/GradientText";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-center z-10 bg-zinc-800 text-zinc-50 md:min-h-[calc(100vh-6rem)] md:p-0 py-20">
        <h1 className="flex flex-col text-3xl md:text-7xl lg:text-9xl">
          <GradientText
            colors={["#6BA9FF", "#4FFF7B", "#D86BFF"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class font-black font-poppins"
          >
            DIGILYNK
          </GradientText>
        </h1>
      </div>
      <footer className="bg-zinc-900 shadow-inner px-4 sm:px-6 py-12 text-zinc-300  w-full border-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="flex flex-row items-center space-x-3">
                <img
                  src={digiLynkLight}
                  className="size-12"
                  alt="Digilynk Logo"
                />
                <h1 className="text-3xl font-semibold text-white">Digilynk</h1>
              </div>
              <p className="text-base text-center md:text-left text-zinc-400 max-w-md">
                Transforming ideas into digital reality. We provide innovative
                solutions for your business needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Home
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Services
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  About us
                </li>

                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h2 className="text-xl font-semibold">Connect With Us</h2>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                {/* <li className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                  <span>Message Us</span>
                </li> */}
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/digilynk-448720354/"
                >
                  <li className="flex items-center space-x-2 hover:text-blue-400 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </li>
                </a>
                <li className="flex items-center space-x-2 hover:text-pink-400 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </li>
                {/* <li className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </li> */}
                {/* <li className="flex items-center space-x-2 hover:text-green-400 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </li> */}
                <li className="flex items-center space-x-2 hover:text-red-400 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Digilynk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
