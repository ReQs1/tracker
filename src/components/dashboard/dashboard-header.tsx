function DashboardHeader({ userName }: { userName: string }) {
  return (
    <div>
      <h1 className="mb-1 text-3xl font-bold">Welcome back, {userName}</h1>
      <p className="text-gray-500">
        Here's an overview of your job search progress.
      </p>
    </div>
  );
}

export default DashboardHeader;
