export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>THis is Contact Layout</h1>
      {children}
    </div>
  );
}
