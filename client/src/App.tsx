import { ShieldCheck, Server, Activity, Users, Database, Layers, ArrowUpRight } from 'lucide-react';

export default function App() {

  const stats = [
    { label: 'Platform Availability', value: '99.98%', icon: Activity, change: '+0.04% MoM' },
    { label: 'Active Microservices', value: '18 Services', icon: Layers, change: 'All Healthy' },
    { label: 'Provisioned Tenants', value: '1,420 Orgs', icon: Users, change: '+12% this month' },
    { label: 'DB Latency (p99)', value: '14.2 ms', icon: Database, change: '-2.1 ms optimized' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      {/* Navigation Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-indigo-500/20">
              ML
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">Enterprise Ops Platform</span>
              <span className="ml-2 text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-medium">Production Ready</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">Manish Lalotra</p>
              <p className="text-xs text-slate-400">Full Stack Developer & DevOps Engineer</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 font-semibold text-sm">
              ML
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-900/40 via-slate-900 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Full-Stack Application & Operations Console
            </h1>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Demonstrating full-stack React TypeScript frontend coupled with Node.js Express microservices, JWT authentication, PostgreSQL integration, and containerized Docker orchestration.
            </p>
          </div>
          <div className="flex gap-3">
            <a href="/api/v1/health" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition">
              <Server className="w-4 h-4" /> Live API Health <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition">
                <div className="flex items-center justify-between text-slate-400 mb-3">
                  <span className="text-xs font-medium uppercase tracking-wider">{s.label}</span>
                  <div className="p-2 rounded-lg bg-slate-800 text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="text-xs text-emerald-400 mt-2 font-medium">{s.change}</div>
              </div>
            );
          })}
        </div>

        {/* Architecture & Service Health Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-bold text-lg text-white">System Architecture & Core Services</h2>
              <span className="text-xs text-slate-400">Tier: Production N+1</span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'API Gateway / Reverse Proxy', tech: 'Nginx 1.25 + SSL', status: 'Online', latency: '2ms' },
                { name: 'Core Application Service', tech: 'Node.js 20 + Express + TypeScript', status: 'Online', latency: '8ms' },
                { name: 'Relational Database', tech: 'PostgreSQL 16 Multi-AZ', status: 'Online', latency: '4ms' },
                { name: 'In-Memory Cache & Session Store', tech: 'Redis 7.2 Cluster', status: 'Online', latency: '1ms' },
                { name: 'Monitoring & Telemetry', tech: 'Prometheus + Winston Exporters', status: 'Active', latency: 'Real-time' },
              ].map((svc, i) => (
                <div key={i} className="flex items-center justify-between p-3.5 rounded-lg bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition">
                  <div>
                    <div className="font-semibold text-sm text-slate-200">{svc.name}</div>
                    <div className="text-xs text-slate-400">{svc.tech}</div>
                  </div>
                  <div className="flex items-center gap-4 text-right">
                    <span className="text-xs text-slate-400">{svc.latency}</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {svc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Engineering Highlights */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4 flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-lg text-white border-b border-slate-800 pb-4">Engineering Standards</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Strict TypeScript typings across frontend and backend tiers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Multi-stage non-root container images with Trivy vulnerability scanning.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Automated CI/CD pipelines via GitHub Actions with linting, tests, and build validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>Structured JSON logging via Winston with contextual request correlation IDs.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs text-slate-300">
              <span className="font-semibold text-indigo-300">Designed & Maintained by:</span>
              <p className="mt-1 text-slate-400">Manish Lalotra — Full Stack Developer & DevOps Engineer</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Enterprise Ops Platform &copy; 2026 Manish Lalotra. Built with React, TypeScript, Express, PostgreSQL & Docker.
      </footer>
    </div>
  );
}
