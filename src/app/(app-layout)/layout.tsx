import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import { Toaster } from "react-hot-toast";

export const dynamic = "force-dynamic";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex grow flex-col">{children}</main>
      <AppFooter />
      <Toaster />
    </>
  );
}

export default AppLayout;
