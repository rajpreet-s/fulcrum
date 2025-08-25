import Header from "@/components/marketing/Header";
import Footer from "@/components/shared/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
