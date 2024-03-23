

// export const metadata: Metadata = {
//   title: "Dev Controle - Seu sistema de gerenciamento.",
//   description: "Gerencie seus clientes e atendimentos de forma fácil!",
// };

import { DashboardHeader } from "./components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <DashboardHeader/>
        {children}
      </>
    </html>
  );
}
