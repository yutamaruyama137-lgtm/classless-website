import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Check, Play, MapPin, 
  Search, Users, Star, Globe, Heart, Smartphone, 
  ArrowRight, Download, Mail, MessageCircle, FileText,
  MousePointer2, Sparkles
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS設定
const EMAILJS_SERVICE_ID = 'service_2halzzu'; // EmailJSのService ID
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_xm857rk'; // お問い合わせフォーム用のTemplate ID
const EMAILJS_TEMPLATE_ID_DOWNLOAD = 'template_dxc8fxn'; // 資料ダウンロードフォーム用のTemplate ID（管理者への通知用）
const EMAILJS_PUBLIC_KEY = '4X-cAwUOs5FYULv7O'; // EmailJSのPublic Key

// 資料ダウンロードリンク
const DOWNLOAD_LINK = 'https://drive.google.com/file/d/1D8yevDVLqC88gCJfHIE4plwCuEFpF1qE/view?usp=sharing'; // Google Driveの共有リンク
const DOWNLOAD_DIRECT_LINK = 'https://drive.google.com/uc?export=download&id=1D8yevDVLqC88gCJfHIE4plwCuEFpF1qE'; // 直接ダウンロードリンク（フォールバック用）

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

// グラフのカード
const DashboardCard = ({ className = "" }) => (
  <div className={`bg-white rounded-3xl border-4 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a] p-4 flex flex-col ${className}`}>
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-sky-500" fill="currentColor" />
        <span className="text-xs font-bold text-slate-700">Map Analytics</span>
      </div>
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="h-2 bg-sky-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-sky-500 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">75%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2 bg-rose-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-rose-500 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">60%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-2 bg-yellow-200 rounded-full flex-1 mr-2">
          <div className="h-full bg-yellow-500 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <span className="text-xs font-bold text-slate-600">45%</span>
      </div>
    </div>
  </div>
);

// スマホのモックアップ
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
          <div className="w-8 h-8 bg-rose-400 rounded-lg flex items-center justify-center">
            <Play size={14} className="text-white" fill="currentColor" />
          </div>
          <div className="flex-1">
            <div className="h-2 bg-slate-200 rounded mb-1"></div>
            <div className="h-1.5 bg-slate-100 rounded w-2/3"></div>
          </div>
        </div>
        <div className="aspect-video bg-slate-200 rounded-lg mb-2 flex items-center justify-center">
          <Play size={24} className="text-slate-400" fill="currentColor" />
        </div>
        <div className="flex gap-1">
          <Heart size={14} className="text-rose-500" fill="currentColor" />
          <MessageCircle size={14} className="text-slate-400" />
          <ArrowRight size={14} className="text-slate-400" />
        </div>
      </div>
    </div>
  </div>
);

/* --- Pages --- */

const LandingPage = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === 'download') {
      onNavigate('download');
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    const form = e.target;
    const formData = {
      company_name: form.company_name.value,
      contact_name: form.contact_name.value,
      email: form.email.value,
      menu: form.menu.value,
      message: form.message.value,
      case_study: form.case_study.checked ? '同意' : '未同意',
    };

    try {
      // 現在時刻を取得（日本時間）
      const now = new Date();
      const timeString = now.toLocaleString('ja-JP', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
      });

      // メール送信
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_CONTACT,
        {
          to_email: 'yuta.maruyama137@gmail.com',
          name: formData.contact_name, // テンプレートの{{name}}用
          time: timeString, // テンプレートの{{time}}用
          company_name: formData.company_name,
          contact_name: formData.contact_name,
          email: formData.email,
          menu: formData.menu,
          message: formData.message,
          case_study: formData.case_study,
        }
      );

      alert('お問い合わせありがとうございます。送信が完了しました。');
      form.reset();
    } catch (error) {
      console.error('メール送信エラー:', error);
      alert('送信に失敗しました。しばらくしてから再度お試しください。');
    } finally {
      setIsSubmittingContact(false);
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

          <div className="hidden lg:flex gap-4">
             <Button variant="outline" className="!px-6 !py-2 !text-sm !shadow-none hover:bg-slate-100" onClick={() => onNavigate('download')}>
               資料DL
             </Button>
            <Button variant="primary" className="!px-6 !py-2 !text-sm" onClick={() => scrollToSection('contact')}>
              無料相談
            </Button>
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
             <Button variant="outline" className="w-full" onClick={() => onNavigate('download')}>
               資料DL
             </Button>
            <Button variant="primary" className="w-full" onClick={() => scrollToSection('contact')}>
              無料相談
            </Button>
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
              <span className="font-bold text-sm tracking-wide">留学生UGC × MEO × 調査</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
              外国人UGCでインバウンドの<br />
              <span className="relative inline-block whitespace-nowrap mr-2">
                <span className="relative z-10 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{ textShadow: '4px 4px 0 #0f172a' }}>「行きたい」</span>
                <span className="absolute -bottom-2 left-0 w-full h-1/2 bg-rose-400 -z-0 skew-x-12 border-2 border-slate-900"></span>
              </span>
              を作る。
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
              外国人コミュニティを起点とした独自のネットワーク。<br/>
              <span className="bg-sky-100 px-1 font-bold border-b-2 border-sky-300">外国人目線</span>のコンテンツ制作から、MEO・調査・イベント送客まで一気通貫で支援します。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" onClick={() => scrollToSection('contact')} icon={ArrowRight}>
                無料相談 (30分)
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('contact')} icon={MousePointer2}>
                無料モニターに応募
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-8 text-sm font-bold text-slate-600 pt-4 border-t-2 border-slate-100/50">
              <span className="flex items-center gap-2"><div className="bg-sky-500 rounded-full p-0.5"><Check size={12} className="text-white"/></div> 最短2週間納品</span>
              <span className="flex items-center gap-2"><div className="bg-sky-500 rounded-full p-0.5"><Check size={12} className="text-white"/></div> 英語字幕・翻訳</span>
              <span className="flex items-center gap-2"><div className="bg-sky-500 rounded-full p-0.5"><Check size={12} className="text-white"/></div> コンプラ徹底</span>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Visual Composition */}
            <div className="relative w-full aspect-square">
               {/* Main Card */}
               <div className="absolute inset-0 m-8 bg-sky-50 rounded-[40px] border-4 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] overflow-hidden">
                  {/* Background Image */}
                  <img 
                    src="/foreign-person.png" 
                    alt="外国人コミュニティ" 
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Elements */}
                  <div className="absolute top-12 left-8 bg-white p-4 rounded-xl border-2 border-slate-900 shadow-md rotate-[-6deg] animate-float">
                    <Play size={24} className="text-rose-500 mb-1" fill="currentColor"/>
                    <div className="text-xs font-bold">UGC Movies</div>
                  </div>
                  
                  <div className="absolute bottom-20 right-8 bg-white p-4 rounded-xl border-2 border-slate-900 shadow-md rotate-[6deg] animate-float animation-delay-2000">
                    <MapPin size={24} className="text-sky-500 mb-1" fill="currentColor"/>
                    <div className="text-xs font-bold">Map Rank Up</div>
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
              「外国人に届かない」<br className="md:hidden"/>原因は明白です。
            </h2>
            <p className="text-slate-400 text-lg">それは、圧倒的な<span className="text-rose-400 font-bold border-b border-rose-400">"素材不足"</span>と<span className="text-sky-400 font-bold border-b border-sky-400">"発信の継続"</span>の欠如です。</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "日本語中心のSNS", sub: "Language Barrier", icon: <MessageCircle />, text: "Google翻訳頼みでは、微妙なニュアンスや魅力が伝わりません。" },
              { title: "素材がない", sub: "No Assets", icon: <FileText />, text: "外国人が見たいのは、綺麗な広告写真ではなく「リアルな体験」です。" },
              { title: "MEO放置", sub: "Invisible on Map", icon: <MapPin />, text: "せっかく近くにいても、Googleマップで見つけられなければ存在しないも同然。" },
              { title: "打ち手が曖昧", sub: "No Strategy", icon: <Search />, text: "「なんとなく」の対策では、予算を浪費するだけで結果に繋がりません。" }
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
            title="外国人ネットワークを「集客インフラ」に" 
            subtitle="Classlessは、単なる制作会社ではありません。外国人コミュニティの熱量と、マーケティングの論理を融合させます。"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="bg-white p-8 rounded-3xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a]">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center text-white text-lg">1</div>
                  ショート動画×MEO
                </h3>
                <p className="text-slate-600 mb-4">
                  SNS集客のためのショート動画とGoogle Mapの順位最適化のためのMEOを掛け合わせて多角的に集客を行います。
                </p>
                <div className="flex gap-2">
                  <Badge text="Shorts動画" color="bg-slate-900" />
                  <Badge text="写真素材" color="bg-slate-900" />
                  <Badge text="多言語対応" color="bg-slate-900" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#0f172a]">
                 <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white text-lg">2</div>
                  調査 × イベント送客
                </h3>
                <p className="text-slate-600 mb-4">
                  「なぜ買ったのか」「何が不安だったか」を直接ヒアリング。さらに外国人コミュニティを活用したイベントやサンプリングも可能です。
                </p>
                <div className="flex gap-2">
                  <Badge text="アンケート" color="bg-slate-900" />
                  <Badge text="インタビュー" color="bg-slate-900" />
                  <Badge text="イベント企画" color="bg-slate-900" />
                </div>
              </div>
            </div>

            {/* Right: Venn Diagram Visual */}
            <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[500px] h-full flex items-center justify-center">
                
                {/* Circle 1: Creative (Left) */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-rose-200/90 rounded-full border-2 border-slate-900 flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Play size={28} className="text-slate-900 mb-2" strokeWidth={2.5} fill="currentColor" />
                  <span className="font-black text-lg text-slate-900 leading-tight">Creative</span>
                  <span className="text-xs font-bold text-slate-700 mt-1 px-2 text-center">Short Video×MEO</span>
                </div>

                {/* Circle 2: Marketing (Right) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-sky-200/90 rounded-full border-2 border-slate-900 flex flex-col items-center justify-center z-10 hover:scale-105 transition-transform duration-300 shadow-lg">
                  <Search size={28} className="text-slate-900 mb-2" strokeWidth={2.5} fill="currentColor" />
                  <span className="font-black text-lg text-slate-900 leading-tight">Marketing</span>
                  <span className="text-xs font-bold text-slate-700 mt-1 px-2 text-center">Data & Event</span>
                </div>

                {/* Center Intersection: Classless */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="bg-white px-6 py-3 rounded-xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] rotate-0 hover:scale-110 transition-transform">
                    <span className="font-black text-2xl tracking-tight text-slate-900">Classless</span>
                  </div>
                </div>

                {/* Phone Mockup - Top Right (離して配置) */}
                <div className="absolute top-0 right-0 z-30 animate-float">
                  <PhoneMockup className="w-28" />
                </div>

                {/* Dashboard Card - Bottom Left (離して配置) */}
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
          <SectionTitle title="提供サービス一覧" subtitle="必要なものを、必要な分だけ。柔軟な組み合わせが可能です。" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "インバウンド向けショート動画制作", 
                tag: "CORE",
                desc: "TikTok/Reels/Shorts向けのショート動画、写真、英語キャプションを一式制作します。",
                icon: <Play />, color: "bg-rose-100", accent: "text-rose-600"
              },
              { 
                title: "宿泊・来店体験型UGC", 
                tag: "STAY",
                desc: "実際に宿泊・体験してレビュー。外国人が不安に感じる点の改善提案レポート付き。",
                icon: <Star />, color: "bg-yellow-100", accent: "text-yellow-600"
              },
              { 
                title: "MEO運用代行", 
                tag: "MAP",
                desc: "Googleビジネスプロフィールの多言語整備、投稿、口コミ返信、ランキング改善。",
                icon: <MapPin />, color: "bg-sky-100", accent: "text-sky-600"
              },
              { 
                title: "留学生インサイト調査", 
                tag: "DATA",
                desc: "定量アンケート＋定性インタビューで「刺さる訴求」を可視化します。",
                icon: <Search />, color: "bg-purple-100", accent: "text-purple-600"
              },
              { 
                title: "テスター・モニター", 
                tag: "TEST",
                desc: "新メニューの試食やサービス体験を通して、率直なフィードバックとUGCを収集。",
                icon: <Users />, color: "bg-emerald-100", accent: "text-emerald-600"
              },
              { 
                title: "イベント協賛・送客", 
                tag: "EVENT",
                desc: "外国人コネクションを活用したイベント運営や、店舗へのリアル送客支援。",
                icon: <Heart />, color: "bg-orange-100", accent: "text-orange-600"
              },
              { 
                title: "留学生生活支援", 
                tag: "SUPPORT",
                desc: "翻訳や困りごとのサポート。企業と留学生の接点を作ります。",
                icon: <Smartphone />, color: "bg-gray-100", accent: "text-gray-600"
              },
              { 
                title: "越境マーケティング", 
                tag: "GLOBAL",
                desc: "海外向けEC開設やSNS運用支援（オプション）。海外進出の足がかりに。",
                icon: <Globe />, color: "bg-indigo-100", accent: "text-indigo-600"
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
          <SectionTitle title="料金プラン例" subtitle="まずは効果を実感していただくために、特別なモニタプランをご用意しました。" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Monitor Plan - Highlighted */}
            <div className="relative z-10">
              <div className="absolute -top-[43px] left-1/2 -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold border-2 border-slate-900 shadow-md">
                おすすめ / 限定数あり
              </div>
              <Card className="border-4 border-rose-400 bg-white relative overflow-hidden !p-10 !shadow-[12px_12px_0px_0px_#0f172a]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-[100px] -z-0"></div>
                
                <h3 className="text-3xl font-black mb-2 relative z-10">無料モニター</h3>
                <div className="flex items-baseline gap-2 mb-6 relative z-10">
                   <span className="text-5xl font-black text-rose-500">¥0</span>
                   <span className="text-slate-500 font-bold">/ 2週間</span>
                </div>
                
                <div className="space-y-4 mb-8 relative z-10">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
                    <p className="font-bold text-rose-700 text-sm mb-2">【提供内容】</p>
                    <ul className="space-y-2 text-sm font-medium">
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> UGCショート動画 1本</li>
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> 写真素材 5〜10枚</li>
                      <li className="flex gap-2 items-center"><Check size={16} className="text-rose-500" /> 簡易レポート</li>
                    </ul>
                  </div>
                  
                  <div className="p-2">
                    <p className="font-bold text-slate-700 text-sm mb-2">【適用条件】</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2">・事例公開OK（Web/SNS）</li>
                      <li className="flex gap-2">・推薦コメントの提供</li>
                      <li className="flex gap-2">・知人店舗のご紹介 (2店舗)</li>
                    </ul>
                  </div>
                </div>
                
                <Button variant="accent" className="w-full text-lg" onClick={() => scrollToSection('contact')}>
                  今すぐモニターに応募する
                </Button>
              </Card>
            </div>

            {/* Standard Plans */}
            <div className="space-y-6">
              {[
                { title: "Shorts Sprint", type: "単発", desc: "動画3本〜 / 写真10枚〜 / 字幕・キャプション込", color: "bg-slate-100" },
                { title: "UGC + MEO Growth", type: "月額", desc: "毎月の素材追加 ＋ Googleマップ運用代行", color: "bg-sky-50" },
                { title: "Research Add-on", type: "調査", desc: "アンケート(100名) ＋ インタビュー ＋ レポート", color: "bg-purple-50" }
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
          <SectionTitle title="導入の流れ" subtitle="複雑な手続きはありません。最短2週間で納品可能です。" />
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-2 bg-slate-100 -z-0 rounded-full">
              <div className="w-full h-full bg-gradient-to-r from-rose-200 via-sky-200 to-slate-200"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "ヒアリング", desc: "ターゲット・NG事項確認" },
                { step: "02", title: "企画・選定", desc: "台本作成・クリエイター手配" },
                { step: "03", title: "撮影・体験", desc: "留学生が実際に訪問" },
                { step: "04", title: "編集・納品", desc: "字幕・キャプション作成" },
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
              { q: "英語ができないのですが大丈夫ですか？", a: "問題ありません。英語キャプションや字幕の作成も含めてClasslessが対応いたします。" },
              { q: "どんな業種が向いていますか？", a: "宿泊施設、体験アクティビティ、飲食店、観光客向け小売店などが特に相性が良いです。" },
              { q: "料金はどう決まりますか？", a: "制作本数、権利範囲（SNSのみ/広告利用OK等）、言語数、体験内容によって調整いたします。" },
              { q: "撮り直しはできますか？", a: "事前の撮影指示書でブレを防ぎますが、必要に応じて調整可能です。" }
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

      {/* Creator Recruitment CTA */}
      <section className="py-20 px-4 bg-slate-900 text-white border-y-2 border-slate-900 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-block bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">For Students</div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">留学生クリエイター / テスター募集</h2>
          <p className="mb-10 text-slate-300 text-lg max-w-2xl mx-auto">
            東京で撮影・体験できる方、SNS発信が得意な方、これから伸ばしたい方。<br/>
            参加登録で最新の案件情報を共有します。
          </p>
          <p className="text-slate-200 text-base font-medium">
            お問い合わせは <a href="mailto:contact@classless.jp" className="text-white font-bold underline hover:text-sky-400 transition-colors">contact@classless.jp</a> までご連絡ください。
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-4 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 -z-0"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <SectionTitle title="無料相談 / モニター応募" subtitle="フォーム送信後、原則24時間以内に担当者よりご連絡いたします。" centered={true} />
          
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a]">
            <form className="space-y-8" onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">会社名 / 店舗名</label>
                  <input type="text" name="company_name" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="例：合同会社Classless" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">ご担当者名</label>
                  <input type="text" name="contact_name" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="例：山田 太郎" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">メールアドレス <span className="text-rose-500">*</span></label>
                <input type="email" name="email" required className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="name@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">ご希望のメニュー</label>
                <div className="relative">
                  <select name="menu" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white appearance-none cursor-pointer">
                    <option>無料モニター（先着）</option>
                    <option>UGC制作</option>
                    <option>MEO対策</option>
                    <option>留学生調査</option>
                    <option>イベント協賛</option>
                    <option>その他・相談したい</option>
                  </select>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-slate-500" size={20}/>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">ご相談内容</label>
                <textarea name="message" rows="4" className="w-full p-4 rounded-xl border-2 border-slate-200 focus:border-slate-900 focus:ring-0 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="現状の課題や、気になる点をご記入ください"></textarea>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-sky-50 rounded-xl border border-sky-100">
                <input type="checkbox" name="case_study" id="case-study" className="mt-1 w-5 h-5 text-sky-500 rounded border-slate-300 focus:ring-sky-500 cursor-pointer" />
                <label htmlFor="case-study" className="text-sm text-slate-700 cursor-pointer select-none">
                  <span className="font-bold block mb-1">事例公開の許可（モニター条件）</span>
                  WebサイトやSNSでの事例紹介（店舗名・成果物）に同意します。
                </label>
              </div>

              <div className="pt-4 text-center space-y-6">
                <Button variant="primary" type="submit" disabled={isSubmittingContact} className="w-full md:w-2/3 text-lg h-16 shadow-[8px_8px_0px_0px_#0f172a]" icon={Mail}>
                  {isSubmittingContact ? '送信中...' : '上記の内容で送信する'}
                </Button>
                <p className="text-xs text-slate-400">
                  送信することで <a href="#" className="underline hover:text-slate-600">プライバシーポリシー</a> に同意したものとみなされます。
                </p>
              </div>
            </form>
          </div>
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
              人と人、国と国をつなぎ、新しい挑戦と学びを生み出す。<br/>
              留学生と共に、インバウンドの未来を創ります。
            </p>
            <div className="flex gap-4">
              {/* Dummy Social Icons */}
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
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-sky-400 transition-colors cursor-pointer">お問い合わせ</a>
               <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('download'); }} className="hover:text-sky-400 transition-colors cursor-pointer">資料ダウンロード</a>
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
          <div>&copy; {new Date().getFullYear()} Classless LLC. All rights reserved.</div>
          <div className="flex gap-4">
            <span>Made in Tokyo, Japan</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- Download Page (Refined) --- */

const DownloadPage = ({ onNavigate }) => {
  const [isSubmittingDownload, setIsSubmittingDownload] = useState(false);

  const handleDownloadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingDownload(true);

    const form = e.target;
    const formData = {
      company_name: form.company_name.value,
      contact_name: form.contact_name.value,
      email: form.email.value,
      industry: form.industry.value,
    };

    try {
      // 現在時刻を取得（日本時間）
      const now = new Date();
      const timeString = now.toLocaleString('ja-JP', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit' 
      });

      // 管理者への通知メールを送信（エラーが発生してもダウンロードページには遷移）
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID_DOWNLOAD,
          {
            to_email: 'yuta.maruyama137@gmail.com',
            name: formData.contact_name,
            time: timeString,
            company_name: formData.company_name,
            contact_name: formData.contact_name,
            email: formData.email,
            industry: formData.industry,
          }
        );
      } catch (emailError) {
        // メール送信エラーはログに記録するが、ダウンロードページへの遷移は続行
        console.error('メール送信エラー（ダウンロードページには遷移します）:', emailError);
      }

      // メール送信の成否に関わらず、サンクスページに遷移（ダウンロード用）
      onNavigate('thanks', { fromDownload: true });
    } catch (error) {
      console.error('フォーム送信エラー:', error);
      // エラーが発生してもダウンロードページには遷移
      onNavigate('thanks', { fromDownload: true });
    } finally {
      setIsSubmittingDownload(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">
      <DotPattern />
      <div className="container mx-auto max-w-4xl px-4 py-12 relative z-10">
        <button onClick={() => onNavigate('home')} className="group flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 mb-12 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-x-1">
          <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={16} /> TOPへ戻る
        </button>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
               <div className="inline-block px-4 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-black border border-rose-200 mb-4 tracking-wider">
                FREE DOWNLOAD
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                Classless<br/>サービス紹介資料
              </h1>
              <p className="text-slate-600 font-medium">
                留学生UGCでインバウンド集客を加速させるためのメソッドと、具体的なサービス内容をまとめた資料です。
              </p>
            </div>
            
            {/* Document Preview Visual */}
            <div className="relative aspect-[4/5] bg-white border-2 border-slate-900 rounded-2xl shadow-[12px_12px_0px_0px_#0f172a] overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
               <div className="bg-slate-900 text-white p-4 text-center font-bold text-sm tracking-widest">CONFIDENTIAL</div>
               <div className="flex-1 p-8 flex flex-col items-center justify-center bg-slate-50 relative">
                 <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                 <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-900 flex items-center justify-center mb-4 shadow-lg">
                   <div className="text-4xl font-black text-slate-900">C</div>
                 </div>
                 <div className="text-2xl font-black text-center text-slate-800">Media Guide<br/>2024</div>
               </div>
               <div className="absolute bottom-4 right-4 bg-sky-400 text-white p-2 rounded-full border-2 border-slate-900 shadow-md">
                 <Download size={20} />
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-900">
                <FileText size={20} className="text-sky-500"/> 
                この資料でわかること
              </h3>
              <ul className="space-y-3 text-sm">
                 <li className="flex gap-3 items-start"><Check size={18} className="text-sky-500 shrink-0 mt-0.5"/> <span className="text-slate-600">留学生UGCで成果が出る"勝ちパターン"</span></li>
                 <li className="flex gap-3 items-start"><Check size={18} className="text-sky-500 shrink-0 mt-0.5"/> <span className="text-slate-600">UGC×MEO×調査の一気通貫モデルの詳細</span></li>
                 <li className="flex gap-3 items-start"><Check size={18} className="text-sky-500 shrink-0 mt-0.5"/> <span className="text-slate-600">無料モニターの条件・導入フロー</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] sticky top-8">
             <div className="text-center mb-8">
               <h2 className="text-xl font-bold mb-2">ダウンロードフォーム</h2>
               <p className="text-xs text-slate-500">下記をご入力の上、ダウンロードボタンを押してください</p>
             </div>
             
             <form className="space-y-5" onSubmit={handleDownloadSubmit}>
                <div>
                  <label className="block text-xs font-bold mb-1 ml-1 text-slate-500 uppercase">Company Name</label>
                  <input type="text" name="company_name" className="w-full p-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="会社名 / 店舗名" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 ml-1 text-slate-500 uppercase">Your Name</label>
                  <input type="text" name="contact_name" className="w-full p-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="お名前" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 ml-1 text-slate-500 uppercase">Email Address <span className="text-rose-500">*</span></label>
                  <input type="email" name="email" required className="w-full p-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white" placeholder="メールアドレス" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 ml-1 text-slate-500 uppercase">Industry</label>
                  <div className="relative">
                    <select name="industry" className="w-full p-3 rounded-lg border-2 border-slate-200 focus:border-slate-900 outline-none transition-colors bg-slate-50 focus:bg-white appearance-none cursor-pointer">
                      <option>選択してください</option>
                      <option>宿泊業</option>
                      <option>飲食業</option>
                      <option>小売・物販</option>
                      <option>レジャー・体験</option>
                      <option>その他</option>
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-slate-400" size={16}/>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 py-2">
                   <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-0 cursor-pointer" id="privacy"/>
                   <label htmlFor="privacy" className="text-xs text-slate-500 cursor-pointer leading-tight">
                     <a href="#" className="underline text-slate-800 font-bold hover:text-sky-500">プライバシーポリシー</a>に同意の上、送信します。
                   </label>
                </div>

                <Button type="submit" variant="primary" disabled={isSubmittingDownload} className="w-full py-4 shadow-md hover:shadow-lg">
                    {isSubmittingDownload ? '送信中...' : '資料を受け取る'}
                </Button>
             </form>
          </div>
        </div>
      </div>
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
          {/* Background Decorative Text */}
          <div className="absolute -top-20 -left-10 text-[200px] font-black text-slate-100/30 select-none pointer-events-none z-0">
            PRIVACY
          </div>

          {/* Main Content Card */}
          <div className="relative bg-white rounded-3xl border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] p-8 md:p-12 z-10">
            <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 relative z-10">
              プライバシーポリシー
            </h1>
            <p className="text-sm text-slate-500 mb-8">最終更新日: {new Date().toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="space-y-8 text-slate-700 leading-relaxed">
              {/* 1. 事業者情報 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">1. 事業者情報</h2>
                <div className="space-y-2">
                  <p><span className="font-bold">事業者名：</span>合同会社Classless</p>
                  <p><span className="font-bold">所在地：</span>〒150-0046 東京都渋谷区円山町5番3号 MIEUX渋谷ビル8階</p>
                  <p><span className="font-bold">代表者：</span>丸山侑太</p>
                  <p><span className="font-bold">連絡先：</span>yuta.maruyama137@gmail.com / 070-6615-9159</p>
                </div>
              </section>

              {/* 2. 定義 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">2. 定義</h2>
                <p>本ポリシーにおいて、「個人情報」「個人データ」等の用語は、個人情報の保護に関する法律および関係ガイドラインに従います。</p>
              </section>

              {/* 3. 取得する情報 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">3. 取得する情報</h2>
                <p className="mb-4">当社は、以下の情報を取得することがあります。</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">(1) お客様（店舗・企業担当者等）から取得する情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>氏名、会社名/店舗名、部署名、役職</li>
                      <li>メールアドレス、電話番号</li>
                      <li>相談内容、希望メニュー、事例公開可否</li>
                      <li>打合せ内容（議事メモ等）、契約/請求に必要な情報</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">(2) 留学生クリエイター/テスター登録者から取得する情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>氏名（または活動名）、メールアドレス、SNSアカウント</li>
                      <li>国籍/使用言語/居住エリア等（活動調整に必要な範囲）</li>
                      <li>作品/実績、撮影可能条件、希望案件情報</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">(3) イベント参加者・調査協力者から取得する情報</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>氏名（またはニックネーム）、連絡先</li>
                      <li>アンケート回答、インタビュー内容（録音/文字起こしを含む場合あり）</li>
                      <li>参加ログ（参加日時など）</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">(4) Webアクセス情報（自動取得）</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Cookie、IPアドレス、端末情報、ブラウザ情報、閲覧履歴、アクセス日時</li>
                      <li>利用状況データ（ページ滞在、クリック等）</li>
                    </ul>
                    <p className="mt-2 text-sm">※当社はアクセス解析等のためにCookie等を使用する場合があります（詳細は「10. Cookie等の利用」参照）。</p>
                  </div>
                </div>
              </section>

              {/* 4. 利用目的 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">4. 利用目的</h2>
                <p className="mb-4">当社は、取得した情報を以下の目的で利用します。</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>お問い合わせ対応、無料相談・モニター応募への対応</li>
                  <li>サービス提供（UGC制作、MEO支援、調査、テスター運用、イベント運営等）</li>
                  <li>連絡、日程調整、資料送付、納品、請求等の事務処理</li>
                  <li>クリエイター/テスターへの案件連絡、選定、稼働管理</li>
                  <li>調査・イベントの実施、集計、分析、レポート作成</li>
                  <li>品質改善、新サービス開発、コンテンツ改善</li>
                  <li>重要なお知らせ（規約変更等）の連絡</li>
                  <li>不正利用の防止、セキュリティ確保</li>
                  <li>法令・ガイドラインへの対応、紛争対応</li>
                </ul>
              </section>

              {/* 5. 第三者提供 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">5. 第三者提供</h2>
                <p>当社は、法令に基づく場合等を除き、本人の同意なく個人データを第三者に提供しません。</p>
                <p className="mt-2 text-sm">※なお、次条の「委託」は第三者提供に該当しない場合があります。</p>
              </section>

              {/* 6. 委託 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">6. 委託（業務委託先の利用）</h2>
                <p className="mb-2">当社は、利用目的の達成に必要な範囲で、個人情報の取扱いを外部に委託することがあります（例：フォーム/メール配信、クラウドストレージ、アクセス解析、会計、業務連絡ツール等）。</p>
                <p>この場合、当社は委託先を適切に選定し、契約等により適切な監督を行います。</p>
              </section>

              {/* 7. 安全管理措置 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">7. 安全管理措置</h2>
                <p className="mb-2">当社は、個人データの漏えい、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
                <p className="text-sm">（例：アクセス権限管理、パスワード管理、委託先管理、取り扱い担当者の限定 等）</p>
              </section>

              {/* 8. 保有個人データの開示等の請求 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">8. 保有個人データの開示等の請求</h2>
                <p className="mb-2">本人は、当社が保有する保有個人データについて、開示、訂正、追加、削除、利用停止、第三者提供停止等を請求できます（法令に基づく範囲）。</p>
                <p className="mb-2"><span className="font-bold">請求手続：</span>下記「13. お問い合わせ窓口」までご連絡ください。本人確認のうえ対応します。</p>
                <p className="text-sm">※請求内容により、手数料をいただく場合があります（発生する場合は事前に通知します）。</p>
              </section>

              {/* 9. 保存期間 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">9. 保存期間</h2>
                <p>当社は、利用目的に必要な期間に限り個人情報を保管し、不要となった場合は適切な方法で削除・廃棄します。</p>
                <p className="mt-2">ただし、法令上の保存義務がある場合はこの限りではありません。</p>
              </section>

              {/* 10. Cookie等の利用 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">10. Cookie等の利用（アクセス解析・広告）</h2>
                <p className="mb-2">当社サイトでは、利便性向上・利用状況分析・広告効果測定等のためにCookie等を利用する場合があります。</p>
                <p>ユーザーはブラウザ設定によりCookieを無効化できますが、一部機能が利用できなくなる場合があります。</p>
              </section>

              {/* 11. 未成年の個人情報 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">11. 未成年の個人情報</h2>
                <p>未成年の方が当社サービスに関する申込み・登録を行う場合、必要に応じて保護者の同意を求めることがあります。</p>
              </section>

              {/* 12. 本ポリシーの変更 */}
              <section>
                <h2 className="text-2xl font-black mb-4 text-slate-900">12. 本ポリシーの変更</h2>
                <p>当社は、法令の変更や運用改善等により本ポリシーを改定することがあります。</p>
                <p className="mt-2">重要な変更がある場合は、当社サイト上で告知します。</p>
              </section>

              {/* 13. お問い合わせ窓口 */}
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
          {/* Background Decorative Text */}
          <div className="absolute -top-20 -left-10 text-[200px] font-black text-slate-100/30 select-none pointer-events-none z-0">
            COMPANY
          </div>

          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl -z-0"></div>

          {/* Main Content Card */}
          <div className="relative bg-white rounded-3xl border-2 border-slate-900 shadow-[12px_12px_0px_0px_#0f172a] p-8 md:p-12 z-10">
            <h1 className="text-4xl md:text-5xl font-black mb-12 text-slate-900 relative z-10">
              会社概要
            </h1>

            <div className="space-y-6">
              {/* Company Name */}
              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">会社名</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">合同会社Classless</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">所在地</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">〒150-0046<br className="md:hidden"/>東京都渋谷区円山町5番3号<br className="md:hidden"/>MIEUX渋谷ビル8階</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row md:items-center border-b-2 border-slate-100 pb-6">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">電話番号</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">TEL: 070-6615-9159</span>
                  <p className="text-sm text-slate-600 mt-1">受付時間: 平日 12:00～17:00</p>
                </div>
              </div>

              {/* Representative */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 mb-2 md:mb-0">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">代表取締役</span>
                </div>
                <div className="md:w-2/3">
                  <span className="text-lg font-bold text-slate-900">丸山 侑太</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
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

/* --- Thanks Page (Refined) --- */

const ThanksPage = ({ onNavigate, fromDownload = false }) => {
  const handleDownload = () => {
    // まず直接ダウンロードを試す
    try {
      const link = document.createElement('a');
      link.href = DOWNLOAD_DIRECT_LINK;
      link.download = 'Classlessサービス紹介資料.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // 直接ダウンロードが失敗した場合のフォールバック（少し待ってから共有リンクを開く）
      setTimeout(() => {
        window.open(DOWNLOAD_LINK, '_blank');
      }, 500);
    } catch (error) {
      // エラーが発生した場合は共有リンクを開く
      console.error('ダウンロードエラー:', error);
      window.open(DOWNLOAD_LINK, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center p-4 font-sans text-slate-800 relative overflow-hidden">
      <DotPattern />
      
      {/* Confetti-like decoration */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-rose-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-yellow-400 rounded-sm rotate-12 animate-pulse"></div>

      <div className="bg-white p-8 md:p-16 rounded-[2.5rem] border-2 border-slate-900 shadow-[16px_16px_0px_0px_#0f172a] max-w-lg w-full text-center space-y-8 relative z-10 animate-in zoom-in-95 duration-300">
         
         <div className="relative inline-block">
           <div className="w-24 h-24 bg-sky-100 rounded-full border-2 border-slate-900 flex items-center justify-center mx-auto mb-2 relative z-10">
              <Check size={48} className="text-sky-500" strokeWidth={3} />
           </div>
           <div className="absolute -inset-2 bg-sky-200 rounded-full blur-lg opacity-50 animate-pulse"></div>
         </div>
         
         <div>
           <h1 className="text-3xl font-black mb-4 text-slate-900">Thank You!</h1>
           {fromDownload ? (
             <p className="text-slate-600 font-medium leading-relaxed">
               ダウンロードありがとうございます！！<br/>
               こちらのボタンから資料をダウンロードしてください。
             </p>
           ) : (
             <p className="text-slate-600 font-medium leading-relaxed">
               お問い合わせありがとうございます。<br/>
               ご入力いただいたメールアドレス宛に<br className="md:hidden"/>資料のURLをお送りしました。
             </p>
           )}
         </div>

         {fromDownload && (
           <div className="py-2">
             <button 
               onClick={handleDownload}
               className="group inline-flex items-center gap-3 font-bold text-white bg-rose-500 px-8 py-4 rounded-xl border-2 border-slate-900 hover:bg-rose-600 hover:-translate-y-1 transition-all shadow-[6px_6px_0px_0px_#0f172a] hover:shadow-[8px_8px_0px_0px_#0f172a]"
             >
               <Download size={24} />
               資料をダウンロード
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
             </button>
           </div>
         )}

         {!fromDownload && (
           <div className="py-2">
             <a href="#" className="group inline-flex items-center gap-3 font-bold text-white bg-slate-900 px-6 py-3 rounded-xl border-2 border-slate-900 hover:bg-white hover:text-slate-900 transition-all shadow-md">
               <FileText size={20} />
               資料を今すぐ開く (PDF)
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
             </a>
           </div>
         )}

         <div className="border-t-2 border-slate-100 pt-8 space-y-4">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Action</p>
           <Button variant="outline" className="w-full border-slate-200 hover:border-slate-900" onClick={() => onNavigate('home')}>
             TOPへ戻る
           </Button>
         </div>
      </div>
    </div>
  );
};

/* --- Main App Controller --- */

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // home | download | thanks | company | privacy
  const [pageProps, setPageProps] = useState({}); // ページ遷移時の追加情報

  // EmailJSを初期化（アプリ起動時に一度だけ）
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Reset scroll on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // ページ遷移関数（追加情報も渡せるように拡張）
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
      {currentPage === 'download' && <DownloadPage onNavigate={handleNavigate} />}
      {currentPage === 'thanks' && <ThanksPage onNavigate={handleNavigate} fromDownload={pageProps.fromDownload} />}
      {currentPage === 'company' && <CompanyPage onNavigate={handleNavigate} />}
      {currentPage === 'privacy' && <PrivacyPage onNavigate={handleNavigate} />}
    </>
  );
};

export default App;


