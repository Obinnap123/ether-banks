
import HeroSection from "@/components/hero/HeroSection";
import SecuritySection from "@/components/security/SecuritySection";
import TransactionsSection from "@/components/transactions/TransactionsSection";
import FutureBankSection from "@/components/future/FutureBankSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SecuritySection />
  <TransactionsSection />
  <FutureBankSection />
    </>
  );
}