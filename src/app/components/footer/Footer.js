import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export const Footer = () => {
  return (
    <footer class="bg-[#0b1d33] text-white py-10">
      <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-12">
        <div>
          <div class="flex items-center mb-4">
            <img
              src="/assets/logo.png"
              alt="Abricoin Logo"
              class="w-45 h-12 mr-2"
            />
          </div>
          <p class="text-sm">
            A new way to make the payments easy, reliable, and 100% secure.
            Claritatem itamconse quat. Exerci tationulla.
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="#">
            <FaFacebookF className='text-white hover:text-[#00c4f4]' size={25} />
            </a>
            <a href="#">
            <FaTwitter className='text-white hover:text-[#00c4f4]' size={25} />
            </a>
            <a href="#">
            <FaInstagram className='text-white hover:text-[#00c4f4]' size={25} />
            </a>
            <a href="#">
            <FaYoutube className='text-white hover:text-[#00c4f4]' size={25} />
              
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">USEFUL LINKS</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">COMMUNITY</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Suggestions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletters</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">SUBSCRIBE NEWSLETTER</h4>
          <p class="text-sm mb-4">
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo.
          </p>
          <div class="relative">
            <input
              type="email"
              class="w-full p-3 rounded-md bg-[#13233a] text-white placeholder-gray-400"
              placeholder="abri@gmail.com"
            />
            <button class="absolute right-0 top-0 h-full bg-[#1da1f2] p-3 rounded-md">
               <IoIosSend size={30} />
            </button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-6 text-sm px-4 lg:px-12">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p>&copy; 2023 Abricoin All Rights Reserved.</p>
          <div class="flex space-x-4">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};