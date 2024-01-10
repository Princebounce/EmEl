import React from 'react';
import Emel from '../../assets/EmEl.svg';

const Footer = () => {
  return (
    <footer className="  p-8">
      <div className="flex">
        <img src={Emel} alt="Emel Logo" className="h-6 mb-4" />
      </div>

      <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li>Video Call</li>
            <li>Voice Call</li>
            <li>Pricing</li>
            <li>What's New</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Navigation</h3>
          <ul>
            <li>Company</li>
            <li>Home</li>
            <li>About</li>
            <li>FAQs</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Products</h3>
          <ul>
            <li>Voice Call</li>
            <li>Video Calls</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Information</h3>
          <ul>
            <li>Trust</li>
            <li>Accessibility</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Legal Notice</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li>Support</li>
            <li>Feedback</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>X(formerly Twitter)</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-8 border-t pt-4">
        <div>
          <p>&copy; 2024 Emel. All rights reserved.</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Request Demo</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
