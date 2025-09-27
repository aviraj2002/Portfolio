import { profileData } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
