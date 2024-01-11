import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom"
import { Link } from "react-router-dom";
import "../../styles/TechnicalSupport.css"
// Crea una función de flecha (componente funcional)
const TechnicalSupport = () => {
  // Lógica del componente, si es necesario
  // Devuelve el JSX que representa el componente
  return (
    <>
      <div className="row col">
        <div>
          <h2 className="Thema">How can we help?</h2>
          <p className="subthema">Popular topics:<Link to="/home">Technical Support</Link>,<Link to="/payment">Donations</Link>,<Link to="/demo">Actor</Link></p>
          <p className="subthema1"><Link to="/preguntas">Frequent Questions</Link></p>
        </div>
        <div className="arrow">
          <a id="explore-topics-link" className="explore-topics" href="#topics-section">
            <span>Explore Topics</span>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill-rule="evenodd" d="M13 17.64l5.35-4.58 1.3 1.52L12 21.13l-7.65-6.55 1.3-1.52L11 17.64V3h2v14.64z" fill="#000000"></path>
            </svg>
          </a>
        </div>


        <div className="padre">

          <div className="list">

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i className="fa-solid fa-user"></i> <strong className="mylist">Acount and Billing</strong>
                  </div>

                </h2>

              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo1" aria-expanded="false" aria-controls="flush-collapseTwo1">
                    <strong>Reel Rhapsody Donations</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    At Reel Rhapsody, we are dedicated to bringing you a seamless and enjoyable movie-watching experience. Your support can make a significant impact on the continued growth of our platform and help us maintain our commitment to providing free, high-quality content. If you appreciate what we do and would like to contribute, here's how you can make a difference:

                    1.<strong>Why Donate?</strong>
                    Reel Rhapsody operates on the generosity of our community. Your donations enable us to enhance our services, acquire new content, and ensure a premium experience for every user.

                    2.<strong>How to Donate:</strong>
                    Making a donation is quick and easy. Visit our dedicated "Donations" page, where you'll find secure options to contribute. Your support, no matter the amount, goes a long way in supporting the future of Reel Rhapsody.

                    3.<strong>What Your Donation Supports:</strong>

                    4.<strong>Content Acquisition:</strong> Your contributions help us acquire a diverse range of movies to cater to different tastes.
                    Technical Improvements: We invest in the latest technologies to enhance streaming quality and address technical challenges.
                    Community Engagement: Donations allow us to engage with our community, gather feedback, and continuously improve our platform.
                    Transparency:
                    We believe in transparency. Regular updates on how donations are utilized will be shared, ensuring you know exactly how your support is making a positive impact.

                    5.<strong>Thank You Gifts:</strong>
                    As a token of our appreciation, donors may receive exclusive perks, early access to new features, or special content. Check our donation page for details on available rewards.

                    Your contribution, no matter the size, helps us keep Reel Rhapsody vibrant and accessible to all movie enthusiasts. We are immensely grateful for your support, and together, we can continue to make Reel Rhapsody a cinematic haven for everyone.

                    Thank you for being a vital part of the Reel Rhapsody community!</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
                    <strong>Failed to login</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">If you have any errors when logging in, you can contact us through our support team <code>rhapsodyreel@gmail.com</code> We are here to help from Monday to Friday 24 hours a day.</div>
                </div>
              </div>
            </div>

          </div>

          <div className="list2 col">

            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i class="fa-solid fa-gear"></i> <strong className="mylist">Fix a Problem</strong>
                  </div>

                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    <strong>Problems playing content</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">At Reel Rhapsody, we strive to provide you with a perfect viewing experience. However, we understand that sometimes technical issues may arise. Here are some common solutions to address issues when playing content:

                    1.<strong>Check your Internet Connection:</strong>
                    Make sure you have a stable internet connection. Playback problems may be caused by a weak or intermittent connection.

                    2.<strong>Update your Browser:</strong>
                    Make sure you are using the most recent version of your web browser. Updates usually fix compatibility issues.

                    3.<strong>Disable Browser Extensions:</strong>
                    Some extensions may interfere with content playback. Try temporarily disabling them and try again.

                    4.<strong>Clear Browser Cache:</strong>
                    Browser cache can build up and cause problems. Try to clean it to ensure a trouble-free experience.

                    5.<strong>Try Another Browser:</strong>
                    If problems persist, try using another browser to rule out browser-specific problems.

                    If you still encounter difficulties, do not hesitate to contact our technical support team. We're here to help you resolve any issues and ensure you get the most out of your Reel Rhapsody experience.

                    Remember that your satisfaction is our priority, and we are constantly working to improve and provide you with the best online movie experience.

                    Thank you for choosing Reel Rhapsody!</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreea" aria-expanded="false" aria-controls="flush-collapseThreea">
                    <strong>Did you forget your password</strong>
                  </button>
                </h2>
                <div id="flush-collapseThreea" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">If you forget your password you can receive help by writing to us at <code>rhapsodyreel@gmail.com</code> we will help you as soon as possible.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    <strong>Problems playing content</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">At Reel Rhapsody, we understand how frustrating it can be when you encounter difficulties while trying to enjoy your favorite movies. If you're experiencing issues with playing content, here are some steps to troubleshoot and resolve common problems:

                    1.<strong>Check Your Internet Connection:</strong>
                    Ensure that you have a stable and reliable internet connection. Sometimes, playback issues can arise due to a weak or intermittent connection.

                    2.<strong>Update Your Browser:</strong>
                    Make sure you are using the latest version of your web browser. Updates often include improvements that can address compatibility issues.

                    3.<strong>Disable Browser Extensions:</strong>
                    Certain browser extensions may interfere with content playback. Temporarily disable them and try again.

                    4.<strong>Clear Browser Cache:</strong>
                    Cached data in your browser can sometimes lead to problems. Try clearing your browser's cache to ensure a smooth experience.

                    5.<strong>Try Another Browser:</strong>
                    If the issues persist, attempt to use a different web browser to rule out any browser-specific problems.

                    If you're still facing difficulties, our dedicated support team is ready to assist you. Please reach out to us with detailed information about the problem, including the browser you're using and any error messages you may have encountered.

                    At Reel Rhapsody, we strive to provide you with the best possible streaming experience, and we appreciate your patience as we work to resolve any issues promptly.

                    Thank you for choosing Reel Rhapsody for your cinematic journey!

                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="list3 col">


            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i class="fa-solid fa-money-bill-trend-up"></i> <strong className="mylist">Help with Payment</strong>
                  </div>

                </h2>


                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo3" aria-expanded="false" aria-controls="flush-collapseTwo3">
                    <strong>Problems with the pay</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">We apologize for any inconvenience you may be experiencing with the payment process on Reel Rhapsody. We understand how crucial a smooth transaction is, and we're here to help you resolve any issues. If you're encountering problems with payment, please follow these steps:

                    1.<strong>Double-check Payment Information:</strong>
                    Ensure that the payment details entered, including credit card information or any other payment method, are accurate. Even a small mistake can lead to transaction failures.

                    2.<strong>Browser Compatibility:</strong>
                    Make sure you are using a compatible and updated web browser. Some older browsers may have issues with modern payment gateways.

                    3.<strong>Try Another Payment Method:</strong>
                    If possible, consider using an alternative payment method. This can help determine if the issue is specific to a particular payment option.

                    4.<strong>Contact Your Payment Provider:</strong>
                    Reach out to your bank or payment provider to ensure there are no restrictions or issues on their end. Sometimes, they might need to authorize the transaction.

                    5.<strong>Clear Browser Cache:</strong>
                    Cached data in your browser might interfere with the payment process. Clear your browser's cache and attempt the transaction again.

                    6.<strong>Contact Our Support Team:</strong>
                    If the problem persists, our dedicated support team is ready to assist you. Please provide detailed information about the issue, including any error messages you receive, and contact us through our support channels.

                    At Reel Rhapsody, your satisfaction is our priority, and we're committed to resolving any payment-related problems promptly. We appreciate your patience and understanding as we work to ensure a seamless payment experience for our users.

                    Thank you for choosing Reel Rhapsody for your cinematic journey!

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree4" aria-expanded="false" aria-controls="flush-collapseThree4">
                    <strong>Where can I make a donation?</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Thank you for considering a donation to support Reel Rhapsody! Your contribution helps us continue providing free, high-quality content and enhance your overall streaming experience. Making a donation is simple:

                    1.<strong>Visit Our Donation Page:</strong>
                    Navigate to our dedicated "Donations" page on the Reel Rhapsody website. You can usually find this in the website's main menu or footer.

                    2<strong>.Choose Your Donation Method:</strong>
                    Select your preferred payment method from the available options. We offer secure and convenient methods to ensure a smooth donation process.

                    3.<strong>Enter Donation Amount:</strong>
                    Enter the amount you wish to contribute. Every donation, regardless of size, is genuinely appreciated and goes towards improving our platform.

                    4.<strong>Provide Necessary Information:</strong>
                    Fill in any required information, such as your name, email address, and payment details. Rest assured that your information is handled securely.

                    5.<strong>Complete the Transaction:</strong>
                    Follow the prompts to complete the donation transaction. You may receive a confirmation email once the process is successfully completed.

                    6.<strong>Enjoy Exclusive Benefits (Optional):</strong>
                    As a token of our appreciation, check if there are any exclusive perks, early access to features, or special content available to donors.

                    If you encounter any issues during the donation process or have specific questions, please don't hesitate to reach out to our support team. We're here to assist you and ensure that your contribution is acknowledged and properly utilized.

                    Once again, thank you for supporting Reel Rhapsody. Your generosity helps us continue providing an exceptional movie-watching experience for our community.

                    Happy streaming!</div>
                </div>
              </div>
            </div>

          </div>

          <div className="list4 col">


            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">

                  <div className="text">
                    <i class="fa-solid fa-star"></i> <strong className="mylist">Getting Started</strong>
                  </div>

                </h2>


                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo5" aria-expanded="false" aria-controls="flush-collapseTwo5">
                    <strong>Create an Account</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Begin by creating your Reel Rhapsody account. This will allow you to personalize your movie preferences, save favorites, and enjoy a seamless streaming experience.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThrees" aria-expanded="false" aria-controls="flush-collapseThrees">
                    <strong>Watch for Free</strong>
                  </button>
                </h2>
                <div id="flush-collapseThrees" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Enjoy the magic of cinema without any subscription fees. Reel Rhapsody is committed to providing a free and accessible movie-watching experience for everyone.</div>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div>
              <div className="whitebutton">
                <button type="button" className="btn btn-light">Contact Us</button>
              </div>

              <h2 className="white">Need more help</h2>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

// Exporta la función por defecto
export default TechnicalSupport;