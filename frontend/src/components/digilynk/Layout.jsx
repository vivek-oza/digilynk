"use client";
// components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-background flex justify-center">
        <div className="w-full max-w-[1920px] flex flex-col relative">
          <Navbar />
          <main className="flex-1">
            <Outlet /> {/* This is where child routes will render */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;