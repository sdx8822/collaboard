import { Sidebar } from "./_components/sidebar";
import { OrgSideBar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar></Sidebar>

      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar></OrgSideBar>

          <div className="h-full flex-1">
            <Navbar></Navbar>

            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
