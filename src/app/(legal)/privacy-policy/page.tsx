import styles from "../page.module.css";

export default function PrivacyPage() {
  return (
    <>
      {/* LEFT */}
      <aside className={styles.titleColumn}>
        <h1>
          Privacy Policy
        </h1>
      </aside>

      {/* RIGHT */}
      <section className={styles.contentColumn}>
        {/* SHIPPING */}
        <div className={styles.section}>
          <p>At Mashi, we aim to make your shopping experience smooth, secure, and transparent. This Payment Information page outlines the accepted payment methods, processing details, and related terms for purchases made on our website.</p>
          <p>By placing an order with us, you agree to the payment terms outlined below.</p>
          <h2>Accepted Payment Methods</h2>
          <p>We currently accept the following payment options:</p>
          <ul className={styles.bulleted}>
            <li>Credit Cards (Visa, MasterCard, American Express, etc.)</li>
            <li>International: 10–20 business days (varies by location)</li>
            <li>Debit Cards</li>
            <li>UPI</li>
            <li>Net Banking</li>
            <li> Wallets (as supported by the payment gateway)</li>
          </ul>
          <p>Available payment methods may vary depending on your location and the payment gateway in use.</p>
        </div>

        <div className={styles.section}>
          <h2>Payment Processing</h2>
          <p>All payments are processed securely through trusted third-party payment gateways.</p>
          <ul className={styles.bulleted}>
            <li>Mashi does not store, process, or have access to your card details, UPI IDs, or banking information</li>
            <li>Your payment information is encrypted and handled in accordance with industry security standards.</li>
          </ul>
          <p>Once payment is successfully completed, you will receive an order confirmation via email.</p>
        </div>

        <div className={styles.section}>
          <h2>Pricing and Currency</h2>
          <ul className={styles.bulleted}>
            <li>All prices displayed on the website are in Indian Rupees (INR) unless stated otherwise.</li>
            <li>Prices are inclusive of applicable taxes unless mentioned.</li>
            <li>Mashi reserves the right to change prices at any time without prior notice.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Payment Processing</h2>
          <p>All payments are processed securely through trusted third-party payment gateways.</p>
          <ul className={styles.bulleted}>
            <li>Mashi does not store, process, or have access to your card details, UPI IDs, or banking information</li>
            <li>Your payment information is encrypted and handled in accordance with industry security standards.</li>
          </ul>
          <p>Once payment is successfully completed, you will receive an order confirmation via email.</p>
        </div>

        <div className={styles.section}>
          <h2>Pricing and Currency</h2>
          <ul className={styles.bulleted}>
            <li>All prices displayed on the website are in Indian Rupees (INR) unless stated otherwise</li>
            <li>Prices are inclusive of applicable taxes unless mentioned.</li>
            <li>Mashi reserves the right to change prices at any time without prior notice.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Failed or Declined Payments</h2>
          <p>If a payment fails or is declined:</p>
          <ul className={styles.bulleted}>
            <li>Please check with your bank or payment provider</li>
            <li>Ensure sufficient balance and correct payment details</li>
            <li>Retry using an alternative payment method</li>
          </ul>
          <p>Mashi is not responsible for failed transactions due to technical issues, bank restrictions, or payment gateway errors.</p>
        </div>

        <div className={styles.section}>
          <h2>Refunds</h2>
          <ul className={styles.bulleted}>
            <li>Refunds, if applicable, will be processed to the original payment method used at checkout.</li>
            <li>Refund timelines may vary depending on your bank or payment provider.</li>
          </ul>
          <p>Please refer to our Shipping & Returns Policy for detailed refund eligibility and timelines.</p>
        </div>

        <div className={styles.section}>
          <h2>Taxes and Duties</h2>
          <ul className={styles.bulleted}>
            <li>Applicable taxes are calculated at checkout as per Indian regulations.</li>
            <li>For international orders (if applicable), customs duties, taxes, or import charges are the responsibility of the customer unless otherwise stated.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Security</h2>
          <p>We take reasonable measures to protect your payment information. While we work with secure payment gateways, Mashi is not liable for unauthorized access or breaches that occur outside our systems.</p>
        </div>

        <div className={styles.section}>
          <h2>Disputes and Chargebacks</h2>
          <p>Any payment-related disputes or chargebacks should first be brought to our attention by contacting us directly. Initiating a chargeback without contacting us may delay resolution.</p>
        </div>

        <div className={styles.section}>
          <h2>Contact Us</h2>
          <p>For any questions regarding payments or billing, please contact us at:</p>
          <p>Email: mashiartstore.com</p>
        </div>
          

      </section>
    </>
  );
}
