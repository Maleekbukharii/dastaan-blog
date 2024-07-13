import Layout from "@/components/layout";
export default function AuthLayout({ children }: {
    readonly children: React.ReactNode;
  }) {
    return (
        <main>
        {children}
        </main>
    );
  };
  