import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <main className="flex grow flex-col">{children}</main>
      <AppFooter />
    </>
  );
}

export default AppLayout;
