import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2, Send, Instagram } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES_LIST = [
  'קליפ לאמן',
  'פרסומת / קמפיין',
  'סרט / פיצ׳ר',
  'תסריט ובימוי',
  'הפקה מלאה',
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES_LIST[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setMessage('');
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
            className="w-full max-w-xl rounded-[36px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 text-[#D7E2EA] relative"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="סגור חלון"
              className="absolute top-6 left-6 w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <CheckCircle2 className="w-14 h-14 text-[#B600A8]" />
                <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl">
                  הפרטים נשלחו!
                </h3>
                <p className="text-[#D7E2EA]/75 font-normal max-w-sm">
                  מתנאל וצוות GOATLIB יחזרו אליך בהקדם כדי לתאם שיחה על הפרויקט.
                </p>
              </div>
            ) : (
              <>
                <h3 className="hero-heading font-black uppercase text-3xl sm:text-5xl leading-none tracking-tight mb-2">
                  בואו נרים הפקה
                </h3>
                <p className="text-[#D7E2EA]/70 font-normal text-sm sm:text-base mb-6">
                  סרטים / קליפים / פרסומות / מה שמצטלם יפה. השאירו פרטים ונחזור אליכם ישירות.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#D7E2EA]/75">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="שם מלא / חברה / אמן"
                        className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141518] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#D7E2EA]/75">
                        טלפון נייד *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="050-0000000"
                        className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141518] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] text-right"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#D7E2EA]/75">
                      סוג ההפקה
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_LIST.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                            selectedService === service
                              ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                              : 'bg-[#141518] text-[#D7E2EA]/70 border border-[#D7E2EA]/20 hover:text-[#D7E2EA]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#D7E2EA]/75">
                      פרטים על הפרויקט
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="אמן, מותג, לו״ז משוער או כיוון קריאייטיבי..."
                      className="w-full rounded-2xl border border-[#D7E2EA]/25 bg-[#141518] px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <a
                      href="https://www.instagram.com/matanelgot/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors font-display-en"
                    >
                      <Instagram className="w-4 h-4 text-[#B600A8]" />
                      <span>@matanelgot</span>
                    </a>
                    <button
                      type="submit"
                      className="rounded-full text-white font-bold uppercase tracking-wider px-8 py-3.5 text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-transform duration-150 hover:scale-[1.03] whitespace-nowrap"
                      style={{
                        background:
                          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow:
                          '0px 4px 18px rgba(181, 1, 167, 0.35), 4px 4px 12px #7721B1 inset',
                        outline: '2px solid #FFFFFF',
                        outlineOffset: '-3px',
                      }}
                    >
                      <span>שלח פנייה</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
