import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BudgetManager } from '@/Components/BudgetManager'; // <- Mengimpor "perabotan"

export default function Budget({ auth }) {
  return (
    // Ini adalah "ruangan" yang sudah punya dinding dan atap (layout)
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Budget</h2>}
    >
      <Head title="Budget" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Menempatkan "perabotan" (komponen Anda) di dalam "ruangan" (page) */}
          <BudgetManager />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}