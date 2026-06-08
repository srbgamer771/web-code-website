"use client"

import { useState } from "react";

const servicios = [
  {
    id: "landing",
    nombre: "Landing Page",
    descripcion: "Página de presentación de 1-3 secciones",
    base: 3000,
    tiempo: "1-2 semanas",
  },
  {
    id: "web_sencilla",
    nombre: "Sitio Web Sencillo",
    descripcion: "Catálogo, portafolio o sitio informativo",
    base: 6000,
    tiempo: "2-3 semanas",
  },
  {
    id: "web_completa",
    nombre: "Sitio Web Completo",
    descripcion: "Con formularios, CMS, múltiples secciones",
    base: 12000,
    tiempo: "3-5 semanas",
  },
  {
    id: "ecommerce",
    nombre: "Tienda Online",
    descripcion: "Catálogo de productos + contacto/WhatsApp",
    base: 15000,
    tiempo: "4-6 semanas",
  },
  {
    id: "app_mvp",
    nombre: "App Móvil MVP",
    descripcion: "Flutter, funcionalidades básicas, Firebase",
    base: 20000,
    tiempo: "6-10 semanas",
  },
  {
    id: "sistema",
    nombre: "Sistema a Medida",
    descripcion: "Software personalizado con lógica de negocio",
    base: 35000,
    tiempo: "10-16 semanas",
  },
];

const extras = [
  { id: "diseno", label: "Diseño UI/UX desde cero", costo: 3000 },
  { id: "animaciones", label: "Animaciones y motion", costo: 2000 },
  { id: "seo", label: "Optimización SEO", costo: 1500 },
  { id: "cms", label: "Panel de administración", costo: 4000 },
  { id: "multiidioma", label: "Multiidioma (ES/EN)", costo: 2500 },
  { id: "integracion_pago", label: "Integración de pagos", costo: 4000 },
  { id: "chatbot", label: "Chatbot / IA integrada", costo: 5000 },
  { id: "mantenimiento", label: "Mantenimiento 3 meses", costo: 3000 },
];

const complejidades = [
  { id: "simple", label: "Simple", multiplicador: 1, desc: "Contenido claro, sin integraciones" },
  { id: "medio", label: "Medio", multiplicador: 1.3, desc: "Algunas integraciones, lógica moderada" },
  { id: "complejo", label: "Complejo", multiplicador: 1.7, desc: "Múltiples integraciones, lógica compleja" },
];

export default function CotizarPage() {
  const [servicio, setServicio] = useState<any>(null);
  const [complejidad, setComplejidad] = useState(complejidades[0]);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState<any[]>([]);
  const [urgente, setUrgente] = useState(false);
  const [nombreCliente, setNombreCliente] = useState("");
  const [nombreProyecto, setNombreProyecto] = useState("");

  const toggleExtra = (extra: any) => {
    setExtrasSeleccionados((prev) =>
      prev.find((e) => e.id === extra.id)
        ? prev.filter((e) => e.id !== extra.id)
        : [...prev, extra]
    );
  };

  const calcularTotal = () => {
    if (!servicio) return 0;
    const base = servicio.base * complejidad.multiplicador;
    const totalExtras = extrasSeleccionados.reduce((sum, e) => sum + e.costo, 0);
    const subtotal = base + totalExtras;
    return urgente ? subtotal * 1.25 : subtotal;
  };

  const total = calcularTotal();
  const adelanto = total * 0.5;
  const saldo = total * 0.5;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              &lt;/&gt;
            </div>
            <h1 className="text-2xl font-bold">Web Code</h1>
          </div>
          <p className="text-gray-400 text-sm">Calculadora de Presupuestos</p>
        </div>

        {/* Datos del cliente */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5 border border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Datos del proyecto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-red-500"
              placeholder="Nombre del cliente"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
            />
            <input
              className="bg-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-red-500"
              placeholder="Nombre del proyecto"
              value={nombreProyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
            />
          </div>
        </div>

        {/* Tipo de servicio */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5 border border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Tipo de servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {servicios.map((s) => (
              <button
                key={s.id}
                onClick={() => setServicio(s)}
                className={`text-left p-4 rounded-lg border transition-all ${
                  servicio?.id === s.id
                    ? "border-red-500 bg-red-500/10"
                    : "border-gray-700 bg-gray-800 hover:border-gray-600"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm">{s.nombre}</span>
                  <span className="text-red-400 text-sm font-semibold">
                    ${s.base.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-400 text-xs">{s.descripcion}</p>
                <p className="text-gray-500 text-xs mt-1">⏱ {s.tiempo}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Complejidad */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5 border border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Complejidad</h2>
          <div className="grid grid-cols-3 gap-3">
            {complejidades.map((c) => (
              <button
                key={c.id}
                onClick={() => setComplejidad(c)}
                className={`p-3 rounded-lg border text-center transition-all ${
                  complejidad.id === c.id
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-700 bg-gray-800 hover:border-gray-600"
                }`}
              >
                <div className="font-medium text-sm mb-1">{c.label}</div>
                <div className="text-gray-400 text-xs">{c.desc}</div>
                <div className="text-blue-400 text-xs mt-1">x{c.multiplicador}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Extras */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5 border border-gray-800">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Extras opcionales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {extras.map((e) => {
              const seleccionado = extrasSeleccionados.find((x) => x.id === e.id);
              return (
                <button
                  key={e.id}
                  onClick={() => toggleExtra(e)}
                  className={`flex justify-between items-center p-3 rounded-lg border text-left transition-all ${
                    seleccionado
                      ? "border-green-500 bg-green-500/10"
                      : "border-gray-700 bg-gray-800 hover:border-gray-600"
                  }`}
                >
                  <span className="text-sm">{e.label}</span>
                  <span className={`text-sm font-semibold ${seleccionado ? "text-green-400" : "text-gray-400"}`}>
                    +${e.costo.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Urgente */}
        <div className="bg-gray-900 rounded-xl p-5 mb-5 border border-gray-800">
          <button
            onClick={() => setUrgente(!urgente)}
            className={`flex justify-between items-center w-full p-3 rounded-lg border transition-all ${
              urgente
                ? "border-yellow-500 bg-yellow-500/10"
                : "border-gray-700 bg-gray-800"
            }`}
          >
            <div>
              <div className="font-medium text-sm text-left">⚡ Entrega urgente</div>
              <div className="text-gray-400 text-xs text-left">Menos de la mitad del tiempo estimado</div>
            </div>
            <span className={`text-sm font-semibold ${urgente ? "text-yellow-400" : "text-gray-400"}`}>
              +25%
            </span>
          </button>
        </div>

        {/* Total */}
        {servicio && (
          <div className="bg-gradient-to-r from-red-950 to-blue-950 rounded-xl p-6 border border-gray-700 mb-5">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Resumen de presupuesto</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Servicio base ({servicio.nombre})</span>
                <span>${(servicio.base * complejidad.multiplicador).toLocaleString("es-MX", { maximumFractionDigits: 0 })}</span>
              </div>
              {extrasSeleccionados.map((e) => (
                <div key={e.id} className="flex justify-between text-sm">
                  <span className="text-gray-400">{e.label}</span>
                  <span>+${e.costo.toLocaleString()}</span>
                </div>
              ))}
              {urgente && (
                <div className="flex justify-between text-sm">
                  <span className="text-yellow-400">Cargo por urgencia (25%)</span>
                  <span className="text-yellow-400">+${(calcularTotal() - calcularTotal() / 1.25).toLocaleString("es-MX", { maximumFractionDigits: 0 })}</span>
                </div>
              )}
            </div>

            <div className="border-t border-gray-700 pt-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total estimado</span>
                <span className="text-2xl font-bold text-white">
                  ${total.toLocaleString("es-MX", { maximumFractionDigits: 0 })} MXN
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">Adelanto (50%)</div>
                <div className="font-bold text-green-400">${adelanto.toLocaleString("es-MX", { maximumFractionDigits: 0 })}</div>
              </div>
              <div className="bg-black/30 rounded-lg p-3 text-center">
                <div className="text-xs text-gray-400 mb-1">Saldo final (50%)</div>
                <div className="font-bold text-blue-400">${saldo.toLocaleString("es-MX", { maximumFractionDigits: 0 })}</div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">⏱ Tiempo estimado: {servicio.tiempo}</p>
              <p className="text-xs text-gray-500 mt-1">* Precios en MXN, sin IVA</p>
            </div>
          </div>
        )}

        {!servicio && (
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 text-center text-gray-500">
            <p className="text-sm">Selecciona un tipo de servicio para ver el presupuesto</p>
          </div>
        )}

        <p className="text-center text-gray-600 text-xs mt-4">Web Code © 2026 — Uso interno</p>
      </div>
    </div>
  );
}
