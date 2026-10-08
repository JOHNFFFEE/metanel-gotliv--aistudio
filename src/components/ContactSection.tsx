import React, { useState } from 'react';
import { Send, CheckCircle2, Instagram, ArrowUpLeft } from 'lucide-react';
import FadeIn from './FadeIn';

const PRODUCTION_TYPES = [
  'קליפ לאמן / סינגל',
  'פרסומת / קמפיין למותג',
  'סרט / פיצ׳ר / טלוויזיה',
  'בימוי ופיתוח קריאייטיב',
];

const BUDGET_TIERS = [
  'הפקת בוטיק חדה',
  'הפקה מסחרית מלאה',
  'הפקת ענק / קולנוע',
];

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [prodType, setProdType] = useState(PRODUCTION_TYPES[0]);
  const [budget, setBudget] = useState(BUDGET_TIERS[1]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 pb-20 sm:pb-28 border-t border-[#D7E2EA]/15"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#101115] p-6 sm:p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Right Column (RTL): Pitch & Direct Channels */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              <div>
                <FadeIn delay={0} y={25}>
                  <h2
                    className="hero-heading font-black uppercase leading-none tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
                  >
                    רוצים הפקה שכולם ידברו עליה?
                  </h2>
                </FadeIn>
                <p className="text-[#D7E2EA]/75 text-base sm:text-lg leading-relaxed font-normal">
                  בין אם אתם מנהלים של אמן מהשורה הראשונה, מותג שרוצה פרסומת שלא נראית סאחית, או גוף שידור שמחפש את הדבר הבא — תשאירו פרטים ונחזור אליכם ישר ולעניין.
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4 border-t border-[#D7E2EA]/15">
                <a
                  href="https://www.instagram.com/matanelgot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#16181E] border border-[#D7E2EA]/20 hover:border-[#D7E2EA] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#B600A8]" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#D7E2EA]">
                        האינסטגרם הרשמי — @matanelgot
                      </span>
                      <span className="text-xs text-[#D7E2EA]/60">
                        12.4K עוקבים · מאחורי הקלעים, סטים ורילסים חדשים
                      </span>
                    </div>
                  </div>
                  <ArrowUpLeft className="w-5 h-5 text-[#D7E2EA] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-2xl bg-[#16181E]/60 border border-[#D7E2EA]/10 flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-[#D7E2EA]/70">
                    בית הפקה:
                  </span>
                  <span className="font-display-en font-bold text-sm sm:text-base text-[#D7E2EA]">
                    @goatlib.entertainment
                  </span>
                </div>
              </div>
            </div>

            {/* Left Column (RTL): Interactive Production Lead Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-[32px] border border-[#D7E2EA]/30 bg-[#141518] p-8 sm:p-12 text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-[#B600A8]" />
                  <h3 className="hero-heading font-black text-3xl sm:text-4xl">
                    הפנייה התקבלה אצל מתנאל
                  </h3>
                  <p className="text-[#D7E2EA]/75 max-w-md text-sm sm:text-base">
                    קיבלנו את הפרטים שלך עבור <strong className="text-white">{prodType}</strong>. נחזור אליך בהקדם כדי לתאם שיחה ולהתחיל להריץ עניינים.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setCompany('');
                      setNotes('');
                    }}
                    className="mt-2 px-6 py-2.5 rounded-full border border-[#D7E2EA]/40 text-xs font-bold text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors cursor-pointer"
                  >
                    שליחת פנייה נוספת
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 bg-[#141519] p-6 sm:p-8 rounded-[32px] border border-[#D7E2EA]/15"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#D7E2EA]/70">
                      איזה פרויקט אנחנו מרימים?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PRODUCTION_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProdType(type)}
                          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                            prodType === type
                              ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                              : 'bg-[#0C0C0C] text-[#D7E2EA]/75 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#D7E2EA]/70">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="איך קוראים לך?"
                        className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#D7E2EA]/70">
                        טלפון ישיר *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="050-0000000"
                        className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA] text-right"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#D7E2EA]/70">
                        אמן / מותג / חברה
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="שם האמן או המותג"
                        className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#D7E2EA]/70">
                      סדר גודל הפקה
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {BUDGET_TIERS.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudget(tier)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                            budget === tier
                              ? 'bg-[#7621B0] text-white border border-white/40'
                              : 'bg-[#0C0C0C] text-[#D7E2EA]/70 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/50'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#D7E2EA]/70">
                      כמה מילים על הפרויקט (לו״ז, רעיון, או יעד)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="ספרו לנו בקצרה מה בא לכם לצלם ומתי..."
                      className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#0C0C0C] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#D7E2EA]/55">
                      מענה ישיר ומהיר · ללא מתווכים
                    </span>
                    <button
                      type="submit"
                      className="rounded-full text-white font-bold uppercase tracking-wider px-9 py-4 text-sm inline-flex items-center gap-2.5 cursor-pointer transition-transform duration-150 hover:scale-[1.03] whitespace-nowrap"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          '0px 4px 18px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '-3px',
                      }}
                    >
                      <span>שלח פנייה למתנאל</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Clean Minimal Footer */}
        <footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50 px-2">
          <div>
            © {new Date().getFullYear()} מתנאל גוטליב — GOATLIB ENTERTAINMENT. כל הזכויות שמורות.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/matanelgot/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D7E2EA] transition-colors"
            >
              Instagram (@matanelgot)
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#D7E2EA] transition-colors"
            >
              תיק עבודות
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#D7E2EA] transition-colors"
            >
              שירותי הפקה
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
