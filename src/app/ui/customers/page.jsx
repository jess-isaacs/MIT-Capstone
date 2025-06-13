import { requireSession } from '@/app/lib/session';
import CustomersTable from './table';
import { customers } from '@/app/lib/placeholder-data';

export default async function Page() {
  await requireSession();

  return <CustomersTable customers={customers} />;
}
