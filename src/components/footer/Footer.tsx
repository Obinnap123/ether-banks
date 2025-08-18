import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import AppStoreButton from "./AppStoreButton";
import GooglePlayButton from "./GooglePlayButton";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-4 md:px-15 py-20 space-y-8">
      {/* Top links grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3">Banking</h3>
          <ul className="space-y-2">
            <li>Hold</li>
            <li>Transact</li>
            <li>Earn</li>
            <li>Grow</li>
            <li>Borrow</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Security</h3>
          <ul className="space-y-2">
            <li>Our Security System</li>
            <li>Reserve</li>
            <li>Compliance</li>
            <li>Inheritance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Insights</h3>
          <ul className="space-y-2">
            <li>The Xapo Insider</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <ul className="space-y-2">
            <li>Mission</li>
            <li>Expertise</li>
            <li>Careers</li>
            <li>Disclosures</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>Complaint</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Privacy Notice</li>
            <li>Cookie Notice</li>
            <li>Website Terms of Use</li>
            <li>Responsible Disclosure</li>
            <li>Legal Notice</li>
            <li>Gibraltar Deposit Guarantee Scheme</li>
          </ul>
        </div>
      </div>

      {/* Background wrapper for Address + socials + appstore */}
      <div className="-mx-4 pb-3 md:-mx-15 px-4 md:px-15 pt-20" style={{ backgroundColor: 'rgba(2, 7, 11, 1)' }}>
        {/* Address + socials + appstore */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border border-gray-600 rounded-lg p-6 mt-10 mb-8" style={{ backgroundColor: 'rgba(128, 158, 179, 0.12)' }}>
          <p className="text-sm text-gray-400">
            One Grand Casemates Square <br /> Gibraltar, GX11 1AA
          </p>
          <div className="flex space-x-4 text-gray-400">
            <Instagram size={20} />
            <Facebook size={20} />
            <Linkedin size={20} />
            <Twitter size={20} />
            <Youtube size={20} />
          </div>
          <div className="flex space-x-4">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
      </div>

      {/* Legal text */}
      <div className="text-xs space-y-4 pt-6 leading-relaxed -mx-4 md:-mx-15 px-4 md:px-15 -mt-8" style={{ backgroundColor: 'rgba(14, 14, 14, 1)', borderTop: '1px solid rgba(14, 14, 14, 1)', color: 'rgba(194, 194, 194, 1)' }}>
        <p>
          <sup>1</sup>Eligible fiat deposits are protected by the Gibraltar Deposit Guarantee Scheme up to a maximum of the US Dollar equivalent of EUR 100,000 (subject to prevailing exchange rates on the compensation date). Bitcoin deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          <sup>2</sup>This information is not investment advice. Crypto asset values can go up as well as down and you could lose all the money you invest. This is a high-risk investment and you are not protected if it loses all or some of its value. Past performance is not indicative of future results. Bitcoin deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          <sup>3</sup>The Xapo Bank card can be used globally, however, we cannot guarantee that a particular ATM will accept it. Members may also incur charges directly from the ATM operator for a withdrawal. For more information see our FAQs.
        </p>
        <p>
          <sup>4</sup>Interest on Bitcoin deposits will only be paid on balances of 5 BTC or less. The Annual Interest Rate offered on both USD and Bitcoin deposits is variable and may change at any time. Interest on both USD and BTC is currently paid in BTC. We may instead choose to pay it in any other supported currency or currencies (fiat and/or crypto) from time to time. Please see our Interest FAQs for more information.
        </p>
        <p>
          <sup>5</sup>Please note that some merchant categories are excluded from earning cashback. Please see our Xapo Bank card FAQs for more information.
        </p>
        <p>
          <sup>6</sup>All referral rewards are paid in BTC. Subject to meeting eligibility criteria and referral terms.
        </p>
        <p>
          <sup>7</sup>This information is not investment advice. Security values can go up as well as down. Past performance is not indicative of future results.
        </p>
        <p>
          *Crypto asset services are provided by Xapo Vasp Limited, a company regulated by the Gibraltar Financial Services Commission as a 'Distributed Ledger Technology Provider' under Permission No. 26061 and not by Xapo Bank Limited. Xapo Bank Limited provides services exclusively in respect of fiat balances. Crypto asset deposits are not covered by the Gibraltar Deposit Guarantee Scheme.
        </p>
        <p>
          *For more information on the security features available at Xapo Bank Limited and Xapo Vasp Limited, please visit: https://www.xapobank.com/en/blog/banking-your-btc
        </p>
        <div className="pt-5">
          <p>
            This Financial Promotion has been approved by Xapo Bank Limited on July 22, 2024.
          </p>
        </div>
        <p>
          Any translation of our website into any language other than English is for convenience purposes only. In the event of any conflict or inconsistency between the English version and a translated version, the English version shall prevail.
        </p>
        <p>
          Xapo Bank Limited is a company registered and incorporated in Gibraltar with company No. 111928. Xapo Bank Limited is regulated by the Gibraltar Financial Services Commission under the Financial Services Act 2019 as a 'credit institution' under Permission No. 23171.
        </p>
        <p>
          Xapo VASP Limited is a company registered and incorporated in Gibraltar with company No. 118088 and regulated by the Gibraltar Financial Services Commission under the Financial Services Act 2019 as a 'DLT institution' under Permission No. 26061.
        </p>
        <p>© Xapo Holdings Limited 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
