import React from "react";

const Footer = () => (
  <footer className="border-t border-zinc-800 py-6 mt-8">
    <p className="text-center text-zinc-400">&copy; 2023 Vaibhav Srivastava. All rights reserved.</p>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-2 w-full max-w-xl mx-auto text-sm">
      <a className="hover:text-white transition" href="https://linkedin.com/in/-vaibhav-srivastava08/">LinkedIn</a>
      <a className="hover:text-white transition" href="https://github.com/vaibhavsrivastava00">Github</a>
      <a className="hover:text-white transition" href="https://leetcode.com/u/Vaibhav_Srivastava_08/">Leetcode</a>
      <a className="hover:text-white transition" href="https://www.instagram.com/vaibhav_sri08/">Instagram</a>
      <a className="hover:text-white transition" href="https://x.com/">X</a>
    </div>
  </footer>
);

export default Footer; 