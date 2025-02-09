export const Container = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen px-4 py-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-md mx-auto space-y-12 sm:space-y-16">
        {children}
      </main>
    </div>
  );
};
