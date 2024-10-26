import { Outlet } from "@remix-run/react";

export default function AdminProductsLayout() {
  return (
    <div className="min-h-screen bg-gray-200 p-9">
      <p>Admin Dashboard</p>
      <div className="mt-16 min-h-screen w-full rounded-md bg-white p-4">
        <Outlet />
      </div>
    </div>
  );
}