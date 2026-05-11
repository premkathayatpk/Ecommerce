import CryptoJS from "crypto-js";
import React from "react";

const Payment = () => {
  const config = {
    amount: "100",
    tax_amount: "10",
    total_amount: "110",
    transaction_uuid: `TXN-${Date.now()}`, // Unique ID per request
    product_code: "EPAYTEST",
    secretKey: "8gBm/:&EnhH.1/q",
    success_url: "https://developer.esewa.com.np/success",
    failure_url: "https://developer.esewa.com.np/failure",
  };

  // 1. Create the exact message string eSewa expects
  const signatureString = `total_amount=${config.total_amount},transaction_uuid=${config.transaction_uuid},product_code=${config.product_code}`;

  // 2. Generate the HMAC-SHA256 hash using the signature string and secret key
  const hash = CryptoJS.HmacSHA256(signatureString, config.secretKey);

  // 3. Convert the hash to a Base64 string
  const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Checkout</h2>
      <p>Total Amount: Rs. {config.total_amount}</p>

      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        {/* These fields are hidden from the user but sent to eSewa */}
        <input type="hidden" name="amount" value={config.amount} />
        <input type="hidden" name="tax_amount" value={config.tax_amount} />
        <input type="hidden" name="total_amount" value={config.total_amount} />
        <input
          type="hidden"
          name="transaction_uuid"
          value={config.transaction_uuid}
        />
        <input type="hidden" name="product_code" value={config.product_code} />
        <input type="hidden" name="product_service_charge" value="0" />
        <input type="hidden" name="product_delivery_charge" value="0" />
        <input type="hidden" name="success_url" value={config.success_url} />
        <input type="hidden" name="failure_url" value={config.failure_url} />
        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
        />

        {/* This is the dynamic signature we just calculated */}
        <input type="hidden" name="signature" value={hashInBase64} />

        <button
          type="submit"
          style={{
            backgroundColor: "#60bb46",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Confirm and Pay with eSewa
        </button>
      </form>
    </div>
  );
};

export default Payment;
