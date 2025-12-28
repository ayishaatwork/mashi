import styles from "../page.module.css";

export default function ShippingPage() {
  return (
    <>
      {/* LEFT */}
      <aside className={styles.titleColumn}>
        <h1>
          Shipping
          <br />& Returns
        </h1>
      </aside>

      {/* RIGHT */}
      <section className={styles.contentColumn}>
        {/* SHIPPING */}
        <div className={styles.section}>
          <h2>Shipping Policy</h2>

          <div className={styles.block}>
          <h3>Order Processing</h3>
          <p>
            All Mashi products are handcrafted with care. Please allow 2–5
            business days for your order to be packed and dispatched.
          </p>
          <h3>Shipping Timeline</h3>
          <ul className={styles.bulleted}>
            <li>Within India: 3–7 business days</li>
            <li>International: 10–20 business days (varies by location)</li>
          </ul>
          <p>
            Once shipped, you will receive a tracking link via email or message.
          </p>
          </div>

          <div className={styles.block}>
          <h3>Shipping Charges</h3>
          <p>
            Shipping rates are calculated at checkout based on your location and
            order weight.
          </p>
          </div>

          <div className={styles.block}>
          <h3>Delays</h3>
          <p>
            Because each piece is handmade, delivery timelines may vary due to
            holidays, strikes, or weather conditions. We will keep you informed
            if delays occur.
          </p>
          </div>

        </div>

        {/* RETURNS */}
        <div className={styles.section}>
          <h2>Returns & Exchanges</h2>
          
          <div className={styles.block}>
          <p>
            Every Mashi product is crafted by hand. If something isn’t right,
            we’re here to help.
          </p>
          </div>
 
          <div className={styles.block}>
          <h3>Returns</h3>
          <ul>
            <li>Damaged items</li>
            <li>Incorrect items received</li>
          </ul>
          <p>
            Please contact us within 3 days of receiving your order with photos.
            Items must be unused and in original packaging.
          </p>
          </div>
          
          <div className={styles.block}>
          <h3>Exchanges</h3>
          <ul>
            <li>Items damaged in transit</li>
            <li>Wrong item delivered</li>
          </ul>
          <p>
            Since products are handcrafted in small batches, replacements may
            not always be available. Store credit may be offered instead.
          </p>
          </div>

          <div className={styles.block}>
          <h3>Non-Returnable Items</h3>
          <ul>
            <li>Used products</li>
            <li>Custom or personalised items</li>
            <li>Sale or promotional items</li>
          </ul>
          </div>
  
          <div className={styles.block}>
          <h3>Refunds</h3>
          <ul>
            <li>Store credit</li>
            <li>Original payment method (where applicable)</li>
          </ul>
          <p>
            Refunds may take 5–7 business days depending on your bank or payment
            provider.
          </p>
          </div>
        </div>

        {/* CANCELLATIONS */}
        <div className={styles.section}>
          <h2>Cancellations</h2>
          <p>
            Orders can be cancelled within 12 hours of placement. Once crafting
            or packing begins, cancellations may not be possible.
          </p>
        </div>
      </section>
    </>
  );
}
