export default function AuthenticatedLayout({ children }) {
  return (
    <div className="min-h-screen ">
      <main>{children}</main>
    </div>
  );
}
