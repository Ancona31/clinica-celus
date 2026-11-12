import { Marco } from '@/components/Marco';

export default function LayoutEspanol({ children }: { children: React.ReactNode }) {
  return <Marco lang="es">{children}</Marco>;
}
