import { Spinner } from '@/components/ui/Spinner';
export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
}
