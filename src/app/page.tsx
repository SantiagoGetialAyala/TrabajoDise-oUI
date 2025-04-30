'use client';

import { PricingCard } from './components/PricingCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <section className="grid grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          title="Plan Básico"
          price="$10.000"
          period="mes"
          description="Ideal para emprendedores"
          features={[
            { text: 'Publicación ilimitada', included: true },
            { text: 'Soporte técnico', included: true },
            { text: 'Acceso a estadísticas', included: false },
          ]}
          buttonText="Suscribirse"
          buttonLink="/suscripcion"
          gradient="bg-gradient-to-br from-indigo-500 to-fuchsia-500"
        />
        <PricingCard
          title="Plan Pro"
          price="$20.000"
          period="mes"
          description="Para negocios en crecimiento"
          features={[
            { text: 'Publicación ilimitada', included: true },
            { text: 'Soporte técnico premium', included: true },
            { text: 'Acceso a estadísticas avanzadas', included: true },
          ]}
          buttonText="Probar gratis"
          buttonLink="/suscripcion"
          gradient="bg-gradient-to-br from-purple-600 to-blue-500"
          popular
        />
        <PricingCard
          title="Plan Empresarial"
          price="$50.000"
          period="mes"
          description="Empresas grandes o múltiples tiendas"
          features={[
            { text: 'Gestión multiusuario', included: true },
            { text: 'Soporte 24/7', included: true },
            { text: 'Reportes personalizados', included: true },
          ]}
          buttonText="Contáctanos"
          buttonLink="/contacto"
          gradient="bg-gradient-to-br from-green-500 to-teal-500"
        />
      </section>
    </main>
  );
}
