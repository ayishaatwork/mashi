import styles from "../page.module.css";

export default function PaymentPage() {
  return (
    <>
      {/* LEFT */}
      <aside className={styles.titleColumn}>
        <h1>
          Payment
          <br />& Returns
        </h1>
      </aside>

      {/* RIGHT */}
      <section className={styles.contentColumn}>
        {/* SHIPPING */}
        <div className={styles.section}>
          <p>
            At Mashi, we value your trust and are committed to protecting your
            personal information. This Privacy Policy explains how we collect,
            use, disclose and safeguard your information when you visit our
            website or make a purchase from us.
          </p>
          <p>By accessing or using the Mashi website, you agree to the terms of this Privacy Policy.</p>
          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <p>Personal Information</p>
          <p>When you place an order, sign up for our newsletter, or contact us, we may collect:</p>
          <ul className={styles.bulleted}>
            <li>Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Shipping and billing address</li>
            <li>Payment information (processed securely through third-party payment gateways; we do not store card details)</li>
          </ul>
          <p>Non-Personal Information</p>
          <p>We may automatically collect certain information when you browse our website, such as:</p>
          <ul>
            <li> IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring website or source</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className={styles.bulleted}>
            <li>Process and fulfill orders</li>
            <li>Communicate with you about orders, products, or inquiries</li>
            <li>Improve our website, products, and customer experience</li>
            <li>Send updates, newsletters, or promotional content (only if you opt in)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Sharing of Information</h2>
          <p>We do not sell or rent your personal information. We may share your information only with:</p>
          <ul className={styles.bulleted}>
            <li> Trusted service providers (such as payment gateways, shipping partners, and website hosting services) strictly for fulfilling services</li>
            <li> Legal or regulatory authorities, if required by law</li>
            <li>All third parties are obligated to protect your information and use it only for the intended pur</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies and similar technologies to enhance user experience and analyze website traffic. Cookies help us:
          </p>
          <ul className={styles.bulleted}>
            <li>Remember your preferences</li>
            <li>Understand how visitors use our site</li>
          </ul>
          <p>
            You can choose to disable cookies through your browser settings, though some features of the site may not function properly.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Data Security</h2>
          <p>We take reasonable and appropriate measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure</p>
        </div>

        <div className={styles.section}>
          <h2>Your Rights</h2>
          <p>Depending on applicable laws, you may have the right to:</p>
          <ul className={styles.bulleted}>
            <li>Access the personal information we hold about you</li>
            <li>Request correction or deletion of your information</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us using the details below</p>
        </div>

        <div className={styles.section}>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any information.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Children’s Privacy</h2>
          <p>Mashi does not knowingly collect personal information from children under the age of 18. If you believe a child has provided us with personal information, please contact us and we will take appropriate steps to remove it.</p>
        </div>

        <div className={styles.section}>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>
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
