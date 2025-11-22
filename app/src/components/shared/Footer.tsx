import { productName } from "@/constants/common.constants";

export default function Footer() {
    return (
        <footer className="text-center p-4">
            <p>© 2024 {productName}. All rights reserved.</p>
        </footer>
    );
}
