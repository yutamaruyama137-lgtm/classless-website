import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Check, Play,
  Search, Users, Star, Globe, Heart, Smartphone,
  ArrowRight, Mail, MessageCircle, FileText,
  MousePointer2, Sparkles, BarChart2, Zap, Target,
  Settings, BookOpen, TrendingUp, Database, PenTool, Layers
} from 'lucide-react';


/* Classless UI Theme V2 (Refined)
  - Concept: Neo-Brutalism x Pop
  - Base: Dot Pattern Background
  - Animation: Smooth transitions
*/

/* --- Global Styles & Components --- */

const SectionTitle = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <div className={`inline-block relative ${centered ? 'mx-auto' : ''}`}>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 relative z-10 tracking-tight">
        {title}
      </h2>
      <div className="absolute -bottom-2 -right-2 w-full h-4 bg-sky-200/80 -z-0 rounded-full transform -rotate-1"></div>
    </div>
    {subtitle && (
      <p className="text-slate-600 mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', icon: Icon }) => {
  const baseStyle = "group relative inline-flex items-center justify-center font-bold rounded-full border-2 border-slate-900 transition-all duration-200 active:translate-y-1 active:shadow-none px-8 py-4 cursor-pointer text-base md:text-lg tracking-wide overflow-hidden";

  const variants = {
    primary: "bg-slate-900 text-white shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0f172a] hover:bg-slate-800",
    secondary: "bg-white text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0f172a] hover:bg-slate-50",
    accent: "bg-rose-400 text-white shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0f172a] hover:bg-rose-500",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-100"
  };

  return (
    <button type={type} className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon size={20} className="transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};

const Card = ({ children, className = '', color = 'bg-white' }) => (
  <div className={`${color} rounded-2xl border-2 border-slate-900 p-8 shadow-[6px_6px_0px_0px_#0f172a] hover:shadow-[8px_8px_0px_0px_#0f172a] hover:-translate-y-1 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Badge = ({ text, color = "bg-sky-400" }) => (
  <span className={`${color} text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full border-2 border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]`}>
    {text}
  </span>
);


/* --- Decorative Elements --- */
const DotPattern = () => (
  <div className="absolute inset-0 z-0 opacity-[0.4]"
       style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
  </div>
);

const WavyDivider = ({ flip = false, className = "" }) => (
  <div className={`w-full h-12 overflow-hidden leading-[0] transform ${flip ? 'rotate-180' : ''} ${className}`}>
    <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-900"></path>
    </svg>
  </div>
);

/* --- Additional Visual Components --- */

// AI分析ダッシュボードカード
const DashboardCard = ({ className = "" }) => (
  <div className={`bg-white rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-4 flex flex-col ${className}`}>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-yellow-500" fill="currentColor" />
        <span className="text-xs font-bold text-slate-700">AI Analytics</span>
      </div>
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="h-2 bg-sky-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-sky-500 rounded-full" style={{ width: '82%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">82%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2 bg-rose-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-rose-500 rounded-full" style={{ width: '68%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">68%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2 bg-green-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-green-500 rounded-full" style={{ width: '94%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">94%</span>
      </div>
    </div>
  </div>
);

// AI チャットインターフェースモックアップ
const PhoneMockup = ({ className = "" }) => (
  <div className={`bg-slate-900 rounded-[30px] shadow-[12px_12px_0px_0px_rgba(15,23,42,0.2)] p-2 ${className}`}>
    <div className="bg-white rounded-[24px] overflow-hidden">
      {/* Status Bar */}
      <div className="bg-slate-50 px-4 py-1 flex items-center justify-between text-xs">
        <span className="font-bold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 border border-slate-900 rounded-sm"></div>
          <div className="w-1 h-1 bg-slate-900 rounded-full"></div>
        </div>
      </div>
      {/* Screen Content */}
      <div className="p-3 bg-gradient-to-b from-sky-50 to-white">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <Sparkles size={14} className="text-white" fill="currentColor" />
          </div>
          <div className="flex-1">
            <div className="h-2 bg-slate-200 rounded mb-1"></div>
            <div className="h-1.5 bg-slate-100 rounded w-2/3"></div>
          </div>
        </div>
        <div className="space-y-2 mb-2">
          <div className="bg-sky-100 rounded-xl p-2 text-xs font-medium text-sky-800">AI診断レポート完成</div>
          <div className="bg-slate-100 rounded-xl p-2 text-xs font-medium text-slate-700 ml-4">自動化候補: 3件発見</div>
          <div className="bg-sky-100 rounded-xl p-2 text-xs font-medium text-sky-800">月85h削減を想定</div>
        </div>
        <div className="flex gap-1">
          <Zap size={14} className="text-yellow-500" fill="currentColor" />
          <Check size={14} className="text-green-500" strokeWidth={3} />
          <TrendingUp size={14} className="text-sky-400" />
        </div>
      </div>
    </div>
  </div>
);

// DX ヒーロービジュアル
const DXHeroVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-sky-50 to-slate-50 p-6 flex flex-col gap-4">
    <div className="bg-slate-900 text-white rounded-2xl p-5 border-2 border-slate-900">
      <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">DX IMPACT</div>
      <div className="text-2xl font-black">月120時間削減</div>
      <div className="text-sm text-green-400 mt-1 font-bold">↑ 業務効率 +68% 改善</div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <div className="bg-rose-400 text-white rounded-2xl p-4 border-2 border-slate-900">
        <div className="text-xs font-bold text-rose-100 mb-1">AI導入率</div>
        <div className="text-2xl font-black">94%</div>
      </div>
      <div className="bg-sky-500 text-white rounded-2xl p-4 border-2 border-slate-900">
        <div className="text-xs font-bold text-sky-100 mb-1">満足度</div>
        <div className="text-2xl font-black">4.9 ★</div>
      </div>
    </div>
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-4">
      <div className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wide">AI Workflow</div>
      <div className="space-y-2">
        {[
          { label: 'ヒアリング', done: true },
          { label: '課題特定', done: true },
          { label: 'AI設計', done: true },
          { label: '実装', done: false },
          { label: '効果測定', done: false },
        ].map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${step.done ? 'bg-green-500' : 'bg-slate-200'}`}></div>
            <div className="flex-1 text-xs font-medium text-slate-600">{step.label}</div>
            {step.done && <div className="text-xs text-green-600 font-black">✓</div>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* --- Pages --- */

const LandingPage = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 selection:bg-rose-200 selection:text-slate-900">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b-2 border-slate-900 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img
              src="/classless-logo.png"
              alt="Classless"
              className="h-12 md:h-16 object-contain transform group-hover:scale-105 transition-transform"
              style={{ maxWidth: '200px' }}
              onError={(e) => {
                console.error('画像の読み込みエラー:', e.target.src);
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 font-bold text-sm tracking-wide">
            {['特徴', 'サービス', 'プラン', '流れ', 'FAQ'].map((item, idx) => {
               const ids = ['features', 'services', 'plans', 'flow', 'faq'];
               return (
                 <button key={item} onClick={() => scrollToSection(ids[idx])} className="relative group py-2">
                   {item}
                   <span className="absolute bottom-0 left-0 w-0 h-1 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
                 </button>
               )
            })}
          </div>


          <button className="lg:hidden p-2 hover:bg-slate-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b-2 border-slate-900 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4">
            {['特徴', 'サービス', 'プラン', '流れ', 'FAQ'].map((item, idx) => {
               const ids = ['features', 'services', 'plans', 'flow', 'faq'];
               return (
                 <button key={item} onClick={() => scrollToSection(ids[idx])} className="text-left font-black text-xl py-2 border-b-2 border-slate-100">
                   {item}
                 </button>
               )
            })}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 bg-white relative overflow-hidden">
        <DotPattern />

        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] animate-bounce-slow">
              <Sparkles className="text-yellow-400 fill-current" size={16} />
              <span className="font-bold text-sm tracking-wide">AI × 業務設計 × 自動化</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              DX・AI導入で<br />
              御社の
              <span className="relative inline-block whitespace-nowrap mx-2">
                <span className="relative z-10 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ textShadow: '4px 4px 0 #0f172a' }}>「できない」</span>
                <span className="absolute -bottom-2 left-0 w-full h-1/2 bg-rose-400 -z-0 skew-x-12 border-2 border-slate-900"></span>
              </span>
              <br />をなくす。
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              繰り返し業務の自動化から、全社DX戦略の設計まで。<br/>
              <span className="bg-sky-100 px-1 font-bold border-b-2 border-sky-300">課題特定→ツール選定→実装→定着</span>まで一気通貫で支援します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" onClick={() => scrollToSection('services')} icon={ArrowRight}>
                サービスを見る
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold text-slate-600 pt-4 border-t-2 border-slate-100/50">
              <span className="flex items-center gap-2"><div className="bg-sky-500 rounded-full p-0.5"><Check size={12} className="text-white"/></div> ツール選定〜実装まで</span>
              <span className="flex items-center gap-2"><div className="bg-sky-500 rounded-full p-0.5"><Check size={12} className="text-white"/></div> 中小〜大企業対応</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Visual Composition */}
            <div className="relative w-full aspect-square">
               {/* Main Card */}
               <div className="absolute inset-0 m-8 bg-sky-50 rounded-[40px] border-4 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] overflow-hidden">
                  {/* DX Dashboard Visual */}
                  <DXHeroVisual />

                  {/* Floating Elements */}
                  <div className="absolute top-12 left-8 bg-white p-4 rounded-xl border-2 border-slate-900 shadow-md rotate-[-6deg] animate-float">
                    <Sparkles size={24} className="text-yellow-500 mb-1" fill="currentColor"/>
                    <div className="text-xs font-bold">AI 自動化</div>
                  </div>

                  <div className="absolute bottom-20 right-8 bg-white p-4 rounded-xl border-2 border-slate-900 shadow-md rotate-[6deg] animate-float animation-delay-2000">
                    <Check size={24} className="text-sky-500 mb-1" strokeWidth={3}/>
                    <div className="text-xs font-bold">DX 完了</div>
                  </div>

                  <div className="absolute bottom-12 left-16 bg-yellow-100 p-3 rounded-lg border-2 border-slate-900 shadow-sm -rotate-3">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-500" fill="currentColor"/>)}
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="features" className="py-24 px-4 bg-slate-900 text-white relative">
        <WavyDivider className="absolute top-0 left-0 w-full text-white fill-white transform -translate-y-[99%] rotate-180" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              「DXが進まない」<br className="md:hidden"/>原因は明白です。
            </h2>
            <p className="text-slate-400 text-lg">それは、<span className="text-rose-400 font-bold border-b border-rose-400">"ツール先行"</span>と<span className="text-sky-400 font-bold border-b border-sky-400">"戦略不在"</span>と<span className="text-yellow-400 font-bold border-b border-yellow-400">"推進体制の欠如"</span>です。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "「とりあえず」ツール導入", sub: "No Strategy", icon: <Settings />, text: "予算を使っても業務が変わらない。ツールが誰にも使われず形骸化している状態が続きます。" },
              { title: "どこから手をつけるか不明", sub: "Too Complex", icon: <Search />, text: "課題が多すぎて優先順位がつけられず、「考え中」のままDXが止まってしまっています。" },
              { title: "推進できる人材がいない", sub: "No Champion", icon: <Users />, text: "デジタルスキルを持つ人材が不足し、担当者が属人化したまま変革が進みません。" },
              { title: "効果が測れていない", sub: "No Metrics", icon: <BarChart2 />, text: "導入後の効果検証ができず、次のアクションへ繋がらない。投資対効果が見えません。" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-slate-500 hover:bg-slate-750 transition-all duration-300 group">
                <div className="bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700">
                  {React.cloneElement(item.icon, { size: 28, className: "text-sky-400" })}
                </div>
                <div className="text-xs font-bold text-slate-500 mb-1 tracking-wider uppercase">{item.sub}</div>
                <h3 className="font-bold text-xl mb-4 text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-12 bg-sky-50 clip-path-slant"></div>
      </section>

      {/* Solution (Venn Diagram Concept) */}
      <section className="py-24 px-4 bg-sky-50 border-b-2 border-slate-900 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="AI × 業務設計を「DXインフラ」に"
            subtitle="Classlessは、単なるツール導入支援会社ではありません。AIの活用と業務プロセス設計の論理を融合させます。"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a]">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white text-lg">1</div>
                  AI活用 × 業務自動化
                </h3>
                <p className="text-slate-600 mb-4">
                  繰り返し業務を特定しAIで自動化。ChatGPT・Make・Notionなどのツールを組み合わせて、現場で使える仕組みを設計・実装します。
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge text="AI導入" color="bg-slate-900" />
                  <Badge text="業務分析" color="bg-slate-900" />
                  <Badge text="自動化設計" color="bg-slate-900" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a]">
                 <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white text-lg">2</div>
                  DX戦略設計 × 効果測定
                </h3>
                <p className="text-slate-600 mb-4">
                  経営課題を起点に中長期のDXロードマップを策定。KPI設計から定量的な効果測定まで、「変革が続く仕組み」を一緒に作ります。
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge text="KPI設計" color="bg-slate-900" />
                  <Badge text="ツール選定" color="bg-slate-900" />
                  <Badge text="研修実施" color="bg-slate-900" />
                </div>
              </div>
            </div>

            {/* Right: Venn Diagram Visual */}
            <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">

                {/* Circle 1: AI (Left) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-rose-200/90 rounded-full border-2 border-slate-900 flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Sparkles size={28} className="text-slate-900 mb-2" strokeWidth={2.5} fill="currentColor" />
                  <span className="font-black text-lg text-slate-900 leading-tight">AI × 自動化</span>
                  <span className="text-xs font-bold text-slate-700 mt-1 px-2 text-center">Automation</span>
                </div>

                {/* Circle 2: Strategy (Right) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-sky-200/90 rounded-full border-2 border-slate-900 flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Target size={28} className="text-slate-900 mb-2" strokeWidth={2.5} />
                  <span className="font-black text-lg text-slate-900 leading-tight">業務設計</span>
                  <span className="text-xs font-bold text-slate-700 mt-1 px-2 text-center">DX Strategy</span>
                </div>

                {/* Center Intersection: Classless */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white px-5 py-3 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:scale-110 transition-transform">
                    <span className="font-black text-xl tracking-tight text-slate-900">Classless</span>
                  </div>
                </div>

                {/* Phone Mockup - Top Right */}
                <div className="absolute top-0 right-0 z-30 animate-float">
                  <PhoneMockup className="w-28" />
                </div>

                {/* Dashboard Card - Bottom Left */}
                <div className="absolute bottom-0 left-0 z-30 animate-float animation-delay-2000">
                  <DashboardCard className="w-36" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-white relative">
        <DotPattern />
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionTitle title="提供サービス一覧" subtitle="必要なものを、必要な分だけ。課題に合わせて柔軟に組み合わせ可能です。" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI導入コンサルティング",
                tag: "CORE",
                desc: "ヒアリング→課題特定→ツール選定→実装→定着支援まで一気通貫。AIを「使える状態」にします。",
                icon: <Sparkles />, color: "bg-rose-100", accent: "text-rose-600"
              },
              {
                title: "業務自動化診断",
                tag: "AUDIT",
                desc: "繰り返し業務を棚卸しし、AI化の優先度と削減インパクトを定量評価。ロードマップを設計します。",
                icon: <Zap />, color: "bg-yellow-100", accent: "text-yellow-600"
              },
              {
                title: "DX戦略設計",
                tag: "STRATEGY",
                desc: "経営課題を起点に、中長期のDXロードマップを策定。投資対効果を明示した計画で役員も納得。",
                icon: <Target />, color: "bg-sky-100", accent: "text-sky-600"
              },
              {
                title: "AI活用研修・ハンズオン",
                tag: "TRAIN",
                desc: "ChatGPT・Notion・Makeなどを実際に操作しながら学ぶ実践研修。現場定着率が大幅に向上。",
                icon: <BookOpen />, color: "bg-purple-100", accent: "text-purple-600"
              },
              {
                title: "SNS・マーケ自動化",
                tag: "AUTO",
                desc: "SNS投稿・分析・レポートのワークフローをAIで自動化。担当者の時間を創造的な業務に。",
                icon: <TrendingUp />, color: "bg-emerald-100", accent: "text-emerald-600"
              },
              {
                title: "データ分析・可視化",
                tag: "DATA",
                desc: "散らばったデータを集約し、ダッシュボードで可視化。経営判断のスピードを加速させます。",
                icon: <Database />, color: "bg-orange-100", accent: "text-orange-600"
              },
              {
                title: "資料・ドキュメント制作支援",
                tag: "DOC",
                desc: "AIを活用した高品質な提案書・報告書・マニュアル作成。制作時間を最大70%削減。",
                icon: <PenTool />, color: "bg-gray-100", accent: "text-gray-600"
              },
              {
                title: "ツール選定・SaaS導入",
                tag: "TOOL",
                desc: "数百種類のSaaS・AIツールの中から、貴社に最適なものを選定・設定・カスタマイズします。",
                icon: <Layers />, color: "bg-indigo-100", accent: "text-indigo-600"
              },
            ].map((service, i) => (
              <Card key={i} className="flex flex-col h-full group">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl border-2 border-slate-900 ${service.color} transition-transform group-hover:rotate-6`}>
                    {React.cloneElement(service.icon, { size: 32, strokeWidth: 2, className: service.accent })}
                  </div>
                  <Badge text={service.tag} color="bg-slate-900" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-24 px-4 bg-slate-50 border-y-2 border-slate-900">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle title="料金プラン例" subtitle="まずは効果を実感していただくために、無料AI業務診断をご用意しました。" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Free Diagnosis Plan - Highlighted */}
            <div className="relative z-10">
              <div className="absolute -top-[43px] left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold border-2 border-slate-900 shadow-md whitespace-nowrap">
                おすすめ / 先着受付中
              </div>
              <Card className="border-4 border-rose-400 bg-white relative overflow-hidden !p-10 !shadow-[12px_12px_0px_0px_#0f172a]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-[100px] -z-0"></div>

                <h3 className="text-3xl font-black mb-2 relative z-10">無料AI業務診断</h3>
                <div className="flex items-baseline gap-2 mb-6 relative z-10">
                   <span className="text-5xl font-black text-rose-500">¥0</span>
                   <span className="text-slate-500 font-bold">/ 30分</span>
                </div>

                <div className="space-y-4 mb-8 relative z-10">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
                    <p className="font-bold text-rose-700 text-sm mb-2">【提供内容】</p>
                    <ul className="space-y-2 text-sm font-medium">
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> 業務ヒアリング 30分</li>
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> 自動化候補リスト（簡易版）</li>
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> 優先度マップ & 概算効果</li>
                    </ul>
                  </div>

                  <div className="p-2">
                    <p className="font-bold text-slate-700 text-sm mb-2">【適用条件】</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">・事例公開OK（Web/SNS）</li>
                      <li className="flex gap-2">・フィードバックの提供</li>
                      <li className="flex gap-2">・知人企業のご紹介 (1社)</li>
                    </ul>
                  </div>
                </div>

                <a href="mailto:yuta.maruyama137@gmail.com" className="group relative inline-flex items-center justify-center font-bold rounded-full border-2 border-slate-900 transition-all duration-200 active:translate-y-1 active:shadow-none px-8 py-4 cursor-pointer text-base md:text-lg tracking-wide overflow-hidden w-full bg-yellow-300 text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#0f172a] hover:bg-yellow-200">
                  お問い合わせはこちら
                </a>
              </Card>
            </div>

            {/* Standard Plans */}
            <div className="space-y-6">
              {[
                { title: "DX診断パック", type: "単発", desc: "課題ヒアリング・優先度整理・AIロードマップ作成", color: "bg-slate-100" },
                { title: "AI活用月額支援", type: "月額", desc: "月次伴走型・AI活用定着・改善サイクル運営", color: "bg-sky-50" },
                { title: "全社DX推進プロジェクト", type: "プロジェクト", desc: "戦略設計・実装・研修・効果測定まで一貫対応", color: "bg-purple-50" }
              ].map((plan, i) => (
                <Card key={i} className={`flex flex-col md:flex-row items-center justify-between gap-4 !p-6 ${plan.color}`}>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                      <h3 className="text-xl font-bold">{plan.title}</h3>
                      <span className="text-xs font-bold bg-white border border-slate-900 px-2 py-0.5 rounded-full">{plan.type}</span>
                    </div>
                    <p className="text-sm text-slate-500">{plan.desc}</p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-sm font-bold text-slate-400">要見積もり</span>
                  </div>
                </Card>
              ))}
              <div className="text-center p-4 bg-white rounded-xl border-2 border-slate-900 border-dashed text-slate-500 text-sm">
                ※ご予算や課題に合わせてカスタマイズ可能です
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle title="導入の流れ" subtitle="複雑な手続きはありません。無料診断から最短2週間で業務改善を実感できます。" />

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-2 bg-slate-100 -z-0 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-rose-200 via-sky-200 to-slate-200"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "無料診断ヒアリング", desc: "業種・課題・目標を30分でヒアリング" },
                { step: "02", title: "優先度の整理", desc: "AI化候補業務を特定し削減効果を試算" },
                { step: "03", title: "実装・ツール設定", desc: "AIツール導入・プロセス設計・研修実施" },
                { step: "04", title: "効果測定・改善", desc: "定量評価と次フェーズのアクション設計" },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="w-full bg-white p-8 rounded-3xl border-2 border-slate-900 text-center shadow-[6px_6px_0px_0px_#0f172a] group-hover:-translate-y-2 transition-transform duration-300 z-10 relative">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-xl border-4 border-white ring-2 ring-slate-900 mx-auto mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-slate-50 relative">
        <DotPattern />
        <div className="container mx-auto max-w-3xl relative z-10">
          <SectionTitle title="よくある質問" />
          <div className="space-y-4">
            {[
              { q: "どんな企業・業種が向いていますか？", a: "中小企業・スタートアップから大企業まで対応しています。特に「繰り返し業務が多い」「担当者が属人化している」「DXを始めたいが何から手をつけるかわからない」企業に効果的です。業種を問わず対応可能です。" },
              { q: "ITが詳しくなくても大丈夫ですか？", a: "問題ありません。ヒアリングから実装まで一緒に進め、専門用語を使わずに分かりやすく説明します。「IT担当者がいない」という企業のご支援実績も多数あります。" },
              { q: "費用はどう決まりますか？", a: "支援範囲・期間・実装規模によって調整します。まず無料AI診断（30分）でご状況をお聞かせいただき、最適なプランをご提案します。お気軽にご相談ください。" },
              { q: "どのくらいで効果が出ますか？", a: "業務自動化は最短1〜2週間で効果を実感できます。DX戦略設計は3ヶ月を目安としています。まず小さく始めて成果を確認してから拡大する進め方をお勧めしています。" }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl border-2 border-slate-900 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all">
                <summary className="flex justify-between items-center p-6 font-bold list-none group-hover:bg-slate-50 transition-colors">
                  <span className="flex gap-4 items-center">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black border border-rose-200">Q</span>
                    <span className="text-lg">{item.q}</span>
                  </span>
                  <div className="bg-slate-100 rounded-full p-1 group-hover:bg-slate-200 transition-colors">
                    <ChevronRight className="transform group-open:rotate-90 transition-transform text-slate-500"/>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed ml-12 border-l-2 border-slate-100 pl-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Recruitment CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white border-y-2 border-slate-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">For Business</div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">DX推進パートナー / 協業企業を募集中</h2>
          <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto">
            AI・DX領域に関心のあるコンサルタント・企業の方、<br/>
            Classlessと共にクライアントのDX推進を担うパートナーとして協業しませんか。
          </p>
          <p className="text-slate-200 text-base font-medium">
            お問い合わせは <a href="mailto:yuta.maruyama137@gmail.com" className="text-white font-bold underline hover:text-sky-400 transition-colors">yuta.maruyama137@gmail.com</a> までご連絡ください。
          </p>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 border-t-8 border-rose-400">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/classless-logo.png"
                alt="Classless"
                className="h-12 md:h-14 object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              AIとテクノロジーを人の現場につなぎ、新しい働き方を創る。<br/>
              DX・AI導入で、御社の可能性を解放します。
            </p>
            <div className="flex gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700 hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all cursor-pointer">
                  <Globe size={18}/>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 text-sm font-bold tracking-wide">
             <div className="flex flex-col gap-4">
               <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Service</span>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="hover:text-sky-400 transition-colors cursor-pointer">特徴・強み</a>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-sky-400 transition-colors cursor-pointer">サービス一覧</a>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('plans'); }} className="hover:text-sky-400 transition-colors cursor-pointer">料金プラン</a>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-sky-400 transition-colors cursor-pointer">導入事例</a>
             </div>
             <div className="flex flex-col gap-4">
               <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Support</span>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-sky-400 transition-colors cursor-pointer">よくある質問</a>
               <a href="mailto:yuta.maruyama137@gmail.com" className="hover:text-sky-400 transition-colors cursor-pointer">お問い合わせ</a>
             </div>
             <div className="flex flex-col gap-4">
               <span className="text-slate-500 text-xs uppercase tracking-widest mb-2">Legal</span>
               <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('company'); }} className="hover:text-sky-400 transition-colors cursor-pointer">運営会社</a>
               <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="hover:text-sky-400 transition-colors cursor-pointer">プライバシーポリシー</a>
               <a href="#" className="hover:text-sky-400 transition-colors">特商法に基づく表記</a>
             </div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <div>&copy; {new Date().getFullYear()} 合同会社Classless. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Made in Tokyo, Japan</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Privacy Policy Page --- */

const PrivacyPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <DotPattern />
      <div className="container mx-auto max-w-4xl px-4 py-12 relative z-10">
        <button onClick={() => onNavigate('home')} className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 mb-12 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-x-1">
          <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={16} /> TOPへ戻る
        </button>

        <div className="relative">
          <div className="absolute -top-20 -left-10 text-[200px] font-black text-slate-100/30 select-none pointer-events-none z-0">
            PRIVACY
          </div>

          <div className="relative bg-white rounded-3xl border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] p-8 md:p-12 z-10">
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 relative z-10">
              プライバシーポリシー
            </h1>
            <p className="text-sm text-slate-500 mb-8">最終更新日: {new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">1. 事業者情報</h2>
                <div className="space-y-2">
                  <p><span className="font-bold">事業者名：</span>合同会社Classless</p>
                  <p><span className="font-bold">所在地：</span>〒150-0046 東京都渋谷区円山町5番3号 MIEUX渋谷ビル8階</p>
                  <p><span className="font-bold">代表者：</span>丸山侑太</p>
                  <p><span className="font-bold">連絡先：</span>yuta.maruyama137@gmail.com / 070-6615-9159</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">2. 定義</h2>
                <p>本ポリシーにおいて、「個人情報」「個人データ」等の用語は、個人情報の保護に関する法律および関係ガイドラインに従います。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">3. 取得する情報</h2>
                <p className="mb-4">当社は、以下の情報を取得することがあります。</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">(1) お客様（企業・団体担当者等）から取得する情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>氏名、会社名、部署名、役職</li>
                      <li>メールアドレス、電話番号</li>
                      <li>相談内容、希望サービス、事例公開可否</li>
                      <li>打合せ内容（議事メモ等）、契約/請求に必要な情報</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">(2) パートナー・協業先から取得する情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>氏名（または活動名）、メールアドレス、実績情報</li>
                      <li>スキル・専門領域・稼働可能条件</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">(3) Webアクセス情報（自動取得）</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Cookie、IPアドレス、端末情報、ブラウザ情報、閲覧履歴、アクセス日時</li>
                      <li>利用状況データ（ページ滞在、クリック等）</li>
                    </ul>
                    <p className="mt-2 text-sm">※当社はアクセス解析等のためにCookie等を使用する場合があります（詳細は「10. Cookie等の利用」参照）。</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">4. 利用目的</h2>
                <p className="mb-4">当社は、取得した情報を以下の目的で利用します。</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>お問い合わせ対応、無料相談・AI診断申し込みへの対応</li>
                  <li>サービス提供（AI導入コンサル、業務自動化、DX戦略設計、研修等）</li>
                  <li>連絡、日程調整、資料送付、納品、請求等の事務処理</li>
                  <li>パートナーへの案件連絡、選定、稼働管理</li>
                  <li>品質改善、新サービス開発、コンテンツ改善</li>
                  <li>重要なお知らせ（規約変更等）の連絡</li>
                  <li>不正利用の防止、セキュリティ確保</li>
                  <li>法令・ガイドラインへの対応、紛争対応</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">5. 第三者提供</h2>
                <p>当社は、法令に基づく場合等を除き、本人の同意なく個人データを第三者に提供しません。</p>
                <p className="mt-2 text-sm">※なお、次条の「委託」は第三者提供に該当しない場合があります。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">6. 委託（業務委託先の利用）</h2>
                <p className="mb-2">当社は、利用目的の達成に必要な範囲で、個人情報の取扱いを外部に委託することがあります（例：フォーム/メール配信、クラウドストレージ、アクセス解析、会計、業務連絡ツール等）。</p>
                <p>この場合、当社は委託先を適切に選定し、契約等により適切な監督を行います。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">7. 安全管理措置</h2>
                <p className="mb-2">当社は、個人データの漏えい、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
                <p className="text-sm">（例：アクセス権限管理、パスワード管理、委託先管理、取り扱い担当者の限定 等）</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">8. 保有個人データの開示等の請求</h2>
                <p className="mb-2">本人は、当社が保有する保有個人データについて、開示、訂正、追加、削除、利用停止、第三者提供停止等を請求できます（法令に基づく範囲）。</p>
                <p className="mb-2"><span className="font-bold">請求手続：</span>下記「13. お問い合わせ窓口」までご連絡ください。本人確認のうえ対応します。</p>
                <p className="text-sm">※請求内容により、手数料をいただく場合があります（発生する場合は事前に通知します）。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">9. 保存期間</h2>
                <p>当社は、利用目的に必要な期間に限り個人情報を保管し、不要となった場合は適切な方法で削除・廃棄します。</p>
                <p className="mt-2">ただし、法令上の保存義務がある場合はこの限りではありません。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">10. Cookie等の利用（アクセス解析・広告）</h2>
                <p className="mb-2">当社サイトでは、利便性向上・利用状況分析・広告効果測定等のためにCookie等を利用する場合があります。</p>
                <p>ユーザーはブラウザ設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">11. 未成年の個人情報</h2>
                <p>未成年の方が当社サービスに関する申込み・登録を行う場合、必要に応じて保護者の同意を求めることがあります。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">12. 本ポリシーの変更</h2>
                <p>当社は、法令の変更や運用改善等により本ポリシーを改定することがあります。</p>
                <p className="mt-2">重要な変更がある場合は、当社サイト上で告知します。</p>
              </section>

              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">13. お問い合わせ窓口</h2>
                <p className="mb-4">個人情報の取扱いに関するお問い合わせ、開示等の請求は、下記までご連絡ください。</p>
                <div className="bg-sky-50 p-6 rounded-2xl border-2 border-sky-200">
                  <p className="font-bold mb-2">連絡先：yuta.maruyama137@gmail.com</p>
                  <p className="font-bold">受付：平日 9:00～17:00</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Company Page --- */

const CompanyPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <DotPattern />
      <div className="container mx-auto max-w-4xl px-4 py-12 relative z-10">
        <button onClick={() => onNavigate('home')} className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 mb-12 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-x-1">
          <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={16} /> TOPへ戻る
        </button>

        <div className="relative">
          <div className="absolute -top-20 -left-10 text-[200px] font-black text-slate-100/30 select-none pointer-events-none z-0">
            COMPANY
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -z-0"></div>

          <div className="relative bg-white rounded-3xl border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] p-8 md:p-12 z-10">
            <h1 className="text-4xl md:text-5xl font-black mb-12 text-slate-900 relative z-10">
              会社概要
            </h1>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">ブランド名</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">合同会社Classless</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">所在地</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">〒150-0046<br className="md:hidden"/>東京都渋谷区円山町5番3号<br className="md:hidden"/>MIEUX渋谷ビル8階</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">電話番号</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">TEL: 070-6615-9159</span>
                  <p className="text-sm text-slate-600 mt-1">受付時間: 平日 12:00～17:00</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">代表取締役</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">丸山 侑太</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-4 border-slate-900">
              <h2 className="text-2xl font-black mb-6 text-slate-900">お問い合わせ</h2>
              <div className="bg-sky-50 p-6 rounded-2xl border-2 border-sky-200">
                <p className="text-slate-700 font-medium mb-4">
                  お問い合わせは以下の連絡先までお願いいたします。
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-sky-600" />
                    <a href="mailto:yuta.maruyama137@gmail.com" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      yuta.maruyama137@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} className="text-sky-600" />
                    <a href="tel:070-6615-9159" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      070-6615-9159
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- Thanks Page --- */

/* --- Main App Controller --- */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageProps, setPageProps] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page, props = {}) => {
    setPageProps(props);
    setCurrentPage(page);
  };

  return (
    <>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
          100% { transform: translateY(0px) rotate(-6deg); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .clip-path-slant { clip-path: polygon(0 100%, 100% 0, 100% 100%); }
      `}</style>

      {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === 'company' && <CompanyPage onNavigate={handleNavigate} />}
      {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
    </>
  );
};

export default App;
