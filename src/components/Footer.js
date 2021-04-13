import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer className="page-footer font-small blue">
        <div className="footer footer-copyright text-center py-3">
          Developed by  Julia Jaeger Foresti
          <a
            href="https://github.com/juliajforesti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github mx-2 text-light" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/juliajforesti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin text-light" aria-hidden="true"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
