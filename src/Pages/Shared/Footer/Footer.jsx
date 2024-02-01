import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex">
        <div className=" w-full py-10 bg-[#1F2937] text-white">
          <h1 className="text-2xl text-white font-normal text-center">
            CONTACT US
          </h1>
          <div className="space-y-1 text-xs">
            <p className=" text-center mt-4 font-light">
              123 ABS Street, Uni 21, Bangladesh
            </p>
            <p className=" text-center font-light">+88 123456789</p>
            <p className=" text-center font-light">
              Mon - Fri: 08:00 - 22:00
            </p>
            <p className=" text-center">
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
        </div>
        <div className="bg-[#111827FF] space-y-4 w-full text-center text-white py-10">
          <h1 className="text-2xl  font-normal">Follow US</h1>
          <p className="text-xs  font-light">Join us on social media</p>
          <div className=" flex justify-center">
            <FaFacebookF className="text-xl mr-5"></FaFacebookF>
            <FaInstagram className="text-xl mr-7"></FaInstagram>
            <FaTwitter className="text-xl "></FaTwitter>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-[#151515] text-white  font-light">
          <aside>
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </div>
    </footer>
  );
};

export default Footer;
