import styles from "../page.module.css";

export default function TermsPage() {
  return (
    <>
      {/* LEFT */}
      <aside className={styles.titleColumn}>
        <h1>
          Terms&
          <br /> Conditions
        </h1>
      </aside>

      {/* RIGHT */}
      <section className={styles.contentColumn}>
        {/* SHIPPING */}
        <div className={styles.section}>
          <p>
            Welcome to Mashi. These Terms and Conditions ("Terms") govern your
            access to and use of our website, products, and services. By visiting
            our website or making a purchase, you agree to be bound by these
            Terms.
          </p>
          <p>
            If you do not agree with any part of these Terms, please do not use
            our website.
          </p>
          <h2>About Mashi</h2>
          <p>
            Mashi is a design-led brand offering thoughtfully made products. All
            products showcased on this website are subject to availability.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Use of the Website</h2>
          <p>By using this website, you agree that:</p>
          <ul className={styles.bulleted}>
            <li>
              You are at least 18 years old or accessing the site under the
              supervision of a legal guardian
            </li>
            <li>You will use the website for lawful purposes only</li>
            <li>
              You will not misuse, copy, or attempt to harm the website, its
              content, or its functionality
            </li>
          </ul>
          <p>
            We reserve the right to restrict or terminate access if misuse is
            detected.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Products and Descriptions</h2>
          <p>
            We strive to display product information, colours, and images as
            accurately as possible. However:
          </p>
          <ul className={styles.bulleted}>
            <li>
              Actual product colours may vary slightly due to screen settings
            </li>
            <li>
              Handmade products may have minor variations, which are part of
              their character and not considered defects
            </li>
          </ul>
          <p>All product descriptions are subject to change without notice.</p>
        </div>

        <div className={styles.section}>
          <h2>Pricing and Payment</h2>
          <p>All prices are listed in INR unless stated otherwise</p>
          <ul className={styles.bulleted}>
            <li>Prices are subject to change without prior notice</li>
            <li>
              Payments are processed securely through third-party payment
              gateways
            </li>
            <li>
              Mashi does not store or have access to your card or payment details
            </li>
          </ul>
          <p>
            We reserve the right to refuse or cancel orders in case of pricing
            errors or suspected fraudulent activity.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Orders and Acceptance</h2>
          <p>
            Once an order is placed, you will receive an order confirmation
            email. This does not guarantee acceptance of the order.
          </p>
          <p>
            An order is considered accepted only after it has been processed and
            dispatched.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Shipping and Delivery</h2>
          <p>
            Shipping timelines are estimates and may vary based on location,
            availability, or external factors beyond our control.
          </p>
          <p>
            Any shipping delays will be communicated where possible. Mashi is
            not liable for delays caused by courier partners or unforeseen
            circumstances.
          </p>
          <p>
            Please refer to our Shipping & Returns Policy for detailed
            information.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Returns, Exchanges, and Cancellations</h2>
          <p>
            All returns, exchanges, and cancellations are governed by our
            Shipping & Returns Policy, available on the website.
          </p>
          <p>
            Custom-made or limited-edition items may not be eligible for return
            unless damaged or defective.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website including text, images, graphics, logos,
            designs, and product conceptsis the property of Mashi and is
            protected by applicable intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, or use any content without prior
            written permission from Mashi.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Third-Party Services and Links</h2>
          <p>
            Our website may include links to third-party websites or services.
            Mashi is not responsible for the content, policies, or practices of
            any third-party sites.
          </p>
          <p>Use of third-party services is at your own risk.</p>
        </div>

        <div className={styles.section}>
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Mashi, its founders,
            partners, and affiliates from any claims, damages, or expenses
            arising out of your misuse of the website or violation of these
            Terms.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with
            the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of the courts of India.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Mashi shall not be liable
            for any indirect, incidental, or consequential damages arising
            from:
          </p>
          <ul className={styles.bulleted}>
            <li>Use or inability to use the website</li>
            <li>Purchase or use of any products</li>
            <li>Delays, interruptions, or errors beyond our control</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Changes to These Terms</h2>
          <p>
            Mashi reserves the right to update or modify these Terms at any time
            without prior notice. Changes will be effective immediately upon
            posting on the website.
          </p>
          <p>We encourage you to review these Terms periodically.</p>
        </div>

        <div className={styles.section}>
          <h2>Contact Us</h2>
          <p>
            For any questions regarding payments or billing, please contact us
            at:
          </p>
          <p>Email: mashiartstore.com</p>
        </div>
      </section>
    </>
  );
}
