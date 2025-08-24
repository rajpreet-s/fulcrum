import PricingCard from "@/components/marketing/PricingCard";

export default function PricingPage() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <PricingCard
        plan="Free"
        price="$0/mo"
        features={["1 User", "1 Brand Deal", "Basic Reporting"]}
      />
      <PricingCard
        plan="Creator"
        price="$29/mo"
        features={["1 User", "Unlimited Brand Deals", "Advanced Reporting"]}
      />
      <PricingCard
        plan="Pro"
        price="$99/mo"
        features={["5 Users", "Unlimited Brand Deals", "Custom Reporting"]}
      />
    </div>
  );
}