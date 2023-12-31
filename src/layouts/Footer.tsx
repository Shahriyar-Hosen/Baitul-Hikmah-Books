import { BsBookHalf } from "react-icons/bs";

const Footer = () => (
  <div className="bg-[#05051f]">
    <footer className="footer container mx-auto p-10 text-base-content">
      <div>
        <BsBookHalf className="text-7xl" />
        <p>
          <span className="text-2xl font-bold">Baitul Hikmah Books</span>
          <br />
          Providing reliable book since 2001
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  </div>
);

export default Footer;
