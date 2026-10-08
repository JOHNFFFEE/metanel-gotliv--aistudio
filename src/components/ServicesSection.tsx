import React from 'react';
import FadeIn from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  subtitle: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'קליפים לאמנים מהשורה הראשונה',
    subtitle: 'אנה זק · שירי מימון · עידו מלכה · האחיות כרקוקלי ועוד עשרות',
    description:
      'הפקות קליפים בקנה מידה בינלאומי שמגדירות מחדש את הפופ והמוזיקה בישראל. מפיתוח הקונספט והארט ועד בימוי, כוריאוגרפיה, תאורה ופוסט — קליפים שנראים כמו מיליון דולר ושוברים את הרשת.',
  },
  {
    number: '02',
    name: 'סרטי קולנוע, פיצ׳רים ודרמות',
    subtitle: 'בחורים טובים 3 · החדש של אבי נשר · אמא פריים טיים',
    description:
      'ניסיון מעשי בלב תעשיית הקולנוע הישראלית. הפקה ויצירה של סרטים שממלאים אולמות ומגיעים לפריים טיים, עם ניהול סטים מורכבים, שחקנים מהשורה הראשונה וסטנדרט צילום קולנועי חסר פשרות.',
  },
  {
    number: '03',
    name: 'פרסומות וקמפיינים שלא נראים "סאחיים"',
    subtitle: 'ADIDAS x מגה ספורט · מותגי אופנה, לייף-סטייל וטכנולוגיה',
    description:
      'אנשים מדלגים על פרסומות משעממות — אבל הם לא יכולים להוריד את העיניים ממה שמצטלם יפה. אנחנו יוצרים פרסומות עם אדג׳, קצב ולוק קולנועי שגורמים למותג שלך להיראות הכי חזק בשוק.',
  },
  {
    number: '04',
    name: 'בימוי, תסריט ופיתוח קריאייטיב',
    subtitle: 'Prod / Screenwriter / Dir — הכל תחת קורת גג אחת',
    description:
      'אתם לא צריכים להגיע עם תסריט מוכן או משרד פרסום מנופח. אנחנו כותבים את התסריט, בונים את הפיצ׳ הוויזואלי ומביימים בפועל כדי שהתוצאה על המסך תהיה חדה, מקורית ובלתי נשכחת.',
  },
  {
    number: '05',
    name: 'הפקה בפועל מא׳ ועד ת׳ (Full Production)',
    subtitle: 'ליהוק · לוקיישנים · צוותי קולנוע · ארט · עריכה וקולור',
    description:
      'מעטפת הפקה שלמה שמורידה מכם את כל כאב הראש. אנחנו מרכיבים את הצוות הכי חזק בארץ לכל פרויקט, מנהלים את התקציב בחוכמה, ומובילים את ההפקה עד לפריים האחרון.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 135px)' }}
          >
            מה אנחנו מפיקים
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-10 md:gap-16"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                borderTop:
                  index === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              }}
            >
              <span
                className="font-display-en font-black leading-none text-[#0C0C0C] shrink-0 tabular-nums"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-2.5 flex-1 max-w-2xl">
                <span className="text-xs sm:text-sm font-bold text-[#7621B0] tracking-wide">
                  {service.subtitle}
                </span>
                <h3
                  className="font-black uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.3vw, 2.15rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-normal leading-relaxed max-w-2xl text-[#0C0C0C]/75"
                  style={{ fontSize: 'clamp(0.92rem, 1.55vw, 1.2rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
