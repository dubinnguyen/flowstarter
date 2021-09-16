import React from "react";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";


const Services = () => {
  return (
    <Layout>
      {/* page header */}
      <PageHeader name="Services" title="What we offer" />
        {/* start of services  */}
  <section className="section bg-white">
    <div className="container">
      <div className="row justify-content-center align-items-center has-anim fade">
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/design.jpg"
              alt="service image"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="#8bc34a"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
              />
            </svg>
          </div>
          <h3 className="text-dark font-weight-600 mb-4">
          Incubation
          </h3>
          <p className="mt-2">
            When we found Flowstarter, we knew how hard it is to bring something new and unique to the market, while gaining adoption is still in the distant future.</p>
          <p className="mt-2">
          That is the reason why we are here to harbor your ideas.
          </p>
          <ul className="service-info-list text-dark mt-4">
            <li>Launchpad</li>
            <li>Accelerator</li>
            <li>Seed Funding</li>
            <li>Management Identification</li>
            <li>And more...</li>
          </ul>
          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>145 projects done</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5 pt-5 has-anim fade">
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="#ecb612"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6z" />
              <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a6.953 6.953 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79c.097.324.17.658.22 1z" />
            </svg>
          </div>
          <h3 className="text-dark font-weight-600 mb-4">Advisory</h3>
          <p className="mt-2">
          Devising a strategy to reach your target market is easier said than done. It often encounters unforeseen circumstances that could potentially ruin your efforts.
          </p>
          <p className="mt-2">
          We already have experience in formulating strategies which are realistic and functional.
          </p>
          <ul className="service-info-list text-dark mt-4">
            <li>Strategic Consulting</li>
            <li>Go-to-market Strategy</li>
            <li>Target Partnership</li>
            <li>Product Optimization</li>
            <li>And more...</li>
          </ul>
          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>89 projects done</p>
        </div>
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/marketing.jpg"
              alt="service image"
            />
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5 pt-5 has-anim fade">
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/webapp.jpg"
              alt="service image"
            />
          </div>
        </div>
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.493.493 0 0 1-.35.145V.989z"
              />
            </svg>
          </div>
          <h3 className="text-dark font-weight-600 mb-4">Investment</h3>
          <p className="mt-2">
          We are looking for projects that really have potential to be the next unicorn. The one that could shape the landscape of technology and become sustainable in the long-run.
          </p>
          <p className="mt-2">
      
          </p>
          <ul className="service-info-list text-dark mt-4">
            <li>Metaverse</li>
            <li>NFT</li>
            <li>DeFi</li>
            <li>GaFi</li>
            <li>And more...</li>
          </ul>
          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>200+ projects done</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center mt-5 pt-5 has-anim fade">
        <div className="col-lg-5 col-md-10 position-relative">
          <div className="service-icon-lg">
            <svg
              viewBox="0 0 16 16"
              fill="#40c39f"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"
              />
            </svg>
          </div>
          <h3 className="text-dark font-weight-600 mb-4">Support</h3>
          <p className="mt-2">
          We provide assistance to anyone who is dedicated to building a better future or having ground-breaking ideas that could revolutionize the way all of us live and work.
          </p>
          <p className="mt-2">
           
          </p>
          <ul className="service-info-list text-dark mt-4">
            <li>Entrepreneurs</li>
            <li>Students</li>
            <li>Dreamers</li>
            <li>Hackers</li>
            <li>And more...</li>
          </ul>
          <span
            className="my-2 d-inline-block"
            style={{ letterSpacing: "-3px" }}
          >
            ━━
          </span>
          <p>93 projects done</p>
        </div>
        <div className="col-lg-6 col-md-10 mb-4 mb-lg-0 pb-2 pb-lg-0">
          <div className="pr-0 pr-lg-3">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/services/interactive-design.jpg"
              alt="service image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of services  */}
      
    </Layout>
  );
};

export default Services;
