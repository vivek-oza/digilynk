"use client";
// components/Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { ScrollProgress } from '../magicui/scroll-progress';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className="min-h-screen bg-zinc-50 flex justify-center">
        <div className="w-full max-w-[1920px] flex flex-col relative">
          <Navbar />
          <ScrollProgress className="h-1 w-full absolute top-[calc(5rem-1px)] z-40" />
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