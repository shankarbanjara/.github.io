// ================== CONFIG ==================
const EMAIL_TO = "sb.gorkhali@gmail.com";
// Fill these if you want real email sending via EmailJS right now:
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

// ================== TRANSLATIONS ==================
let currentLang = "en";

const translations = {
  en: {
    // Home
    title: "Hi, I'm Banjara Shankar",
    subtitle:
      "Welcome to My Portfolio. I’ve been living in Japan since 2016 and have achieved Japanese Language Proficiency Test (JLPT) N1, enabling me to communicate confidently in business settings. I enjoy connecting with people from diverse backgrounds and can speak four languages: Japanese, English, Nepali, and Hindi. Outside of work, I love cooking, driving, traveling, and exploring new things. I’m naturally curious and always eager to learn something new.",
    // About
    aboutTitle: "About Me",
    aboutText:
      "I am Banjara. I have been living in Japan since 2016. I joined my company in 2020 and have worked across various fields including system support, monitoring, and development. With a professional approach, I bring expertise and dedication to every task. I have experience in development, creating scalable and efficient solutions for businesses.",
    // Sections
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    contactTitle: "Contact Me",
    contactButton: "Send Message",
    // Projects (titles + HTML body so layout looks pro)
    projects: [
      {
        title: "Project One",
        html:
          "<strong>Hitachi Solutions Ltd.</strong><br><i>(Manufacturing Support & Inspection)</i><br>April 2020 – December 2020 | Contract Employee (New Graduate)<br><br>" +
          "• Supported assembly and quality inspection of home appliances (≈700 units/day).<br>" +
          "• Created daily defect statistics and presented quality reports in meetings.<br>" +
          "• Learned preparation, finishing, and inspection flows, understanding end-to-end manufacturing."
      },
      {
        title: "Project Two",
        html:
          "<strong>NEC System Ltd.</strong><br><i>(Ministry of Health V-SYS System Operations Support)</i><br>March 2021 – April 2023<br><br>" +
          "• Managed accounts and lifecycle for the V-SYS vaccine management system.<br>" +
          "• Produced age-based statistics, handled incidents, and monitored WAF security.<br>" +
          "• Worked with Salesforce, Microsoft Teams, and Windows OS."
      },
      {
        title: "Project Three",
        html:
          "<strong>Hitachi Systems Ltd.</strong><br><i>(Internal Web Form Development for Merchants – Short-Term)</i><br>May 2023 – August 2023<br><br>" +
          "• Built internal forms and application pages using AWS Cloud9 and Spring Boot.<br>" +
          "• Contributed to both backend and frontend with Java, HTML, and CSS."
      },
      {
        title: "Project Four",
        html:
          "<strong>Teraoka Seiko Co., Ltd.</strong><br><i>(Payment Terminal Support & Merchant Assistance)</i><br>September 2023 – Present<br><br>" +
          "• Investigated issues and cancellation data for credit, e-money, and QR payments using DynamoDB.<br>" +
          "• Provided phone and email support to merchants in Japanese business style.<br>" +
          "• Ensured accurate operations with thorough reporting and confirmations."
      }
    ],
    // Alerts
    alertFill: "Please fill in all fields.",
    alertSuccess: (name) =>
      `Thanks${name ? ", " + name : ""}! Your message has been sent.`,
    alertFail: "Failed to send message. Please try again later.",
    alertFallback:
      "Opening your email app so you can send the message manually."
  },
  jp: {
    // Home
    title: "こんにちは、バンザラ サンカルです。",
    subtitle:
      "私のポートフォリオへようこそ。2016年から日本に住んでおり、日本語能力試験N1を取得し、ビジネスの場でも自信を持って日本語で会話できます。人とのコミュニケーションが好きで、日本語・英語・ネパール語・ヒンディー語の4ヶ国語を話すことができます。趣味は料理、ドライブ、旅行、新しいことを探求することです。好奇心が強く、常に新しい知識や経験を学ぶことを楽しんでいます。",
    // About
    aboutTitle: "私について",
    aboutText:
      "私はバンザラです。2016年から日本に住んでいます。2020年に入社し、システムサポート、監視、開発など幅広い分野で経験を積んできました。常にプロフェッショナルな姿勢で業務に取り組み、効率的でスケーラブルなソリューションを提供してきました。",
    // Sections
    skillsTitle: "スキル",
    projectsTitle: "プロジェクト",
    contactTitle: "お問い合わせ",
    contactButton: "送信",
    // Projects
    projects: [
      {
        title: "プロジェクト1",
        html:
          "<strong>株式会社日立ソリューションズ</strong><br><i>（製造支援・検査業務）</i><br>2020年4月～2020年12月｜契約社員（新卒）<br><br>" +
          "・家電製品の構築支援・品質検査（約700台/日）<br>" +
          "・不備台数の統計を日次で作成し、会議で品質報告<br>" +
          "・段取り・仕上げ・検査の工程を理解し、現場の流れを把握"
      },
      {
        title: "プロジェクト2",
        html:
          "<strong>NECシステム株式会社</strong><br><i>（厚生労働省 V-SYSシステム運用サポート）</i><br>2021年3月～2023年4月<br><br>" +
          "・V-SYS（ワクチン接種管理）のアカウント管理・ライフサイクル管理<br>" +
          "・年齢別統計の作成、障害対応、WAF監視<br>" +
          "・Salesforce／Teams／Windows OS を使用"
      },
      {
        title: "プロジェクト3",
        html:
          "<strong>株式会社日立システム</strong><br><i>（加盟店向け社内Webフォーム開発・短期）</i><br>2023年5月～8月<br><br>" +
          "・AWS Cloud9 と Spring Boot でフォーム／申請ページを開発<br>" +
          "・Java／HTML／CSS によるフロント・バック双方を担当"
      },
      {
        title: "プロジェクト4",
        html:
          "<strong>株式会社寺岡精工</strong><br><i>（決済端末の障害対応・加盟店サポート）</i><br>2023年8月～現在<br><br>" +
          "・電話で決済確認のお問い合わせ対応／クレジット／電子マネー／QR決済の不具合・取消データを DynamoDB で調査<br>" +
          "・電話／メールで加盟店担当へ報告<br>" +
          "・報連相を徹底し、金銭に関わる運用の精度を担保"
          "・決済端末や決済障害に関してのお問い合わせ対応"
      }
    ],
    // Alerts
    alertFill: "未入力の項目があります。",
    alertSuccess: (name) =>
      `${name ? name + "さん" : "ありがとうございます"}。メッセージが送信されました。`,
    alertFail: "送信に失敗しました。時間をおいて再度お試しください。",
    alertFallback: "メールアプリを開いて手動送信します。"
  }
};

// ================== LANGUAGE SWITCH ==================
function setLanguage(lang) {
  currentLang = lang;

  const $ = (id) => document.getElementById(id);

  const map = {
    title: "title",
    subtitle: "subtitle",
    aboutTitle: "about-title",
    aboutText: "about-text",
    skillsTitle: "skills-title",
    projectsTitle: "projects-title",
    contactTitle: "contact-title",
    contactButton: "contact-button"
  };

  Object.entries(map).forEach(([k, id]) => {
    const el = $(id);
    if (el && translations[lang][k]) {
      // Keep paragraphs tidy without extra <br> spam
      if (id === "subtitle" || id === "about-text") {
        el.textContent = translations[lang][k];
      } else {
        el.textContent = translations[lang][k];
      }
    }
  });

  // Update projects uniformly (all 4 cards same design/content per language)
  updateProjectCards(lang);

  // Reflect <html lang="..">
  document.documentElement.setAttribute("lang", lang === "jp" ? "ja" : "en");
}

// Find only the innermost .project-card that actually contain content
function getLeafProjectCards() {
  const all = Array.from(document.querySelectorAll(".projects .project-card"));
  return all.filter((card) => !card.querySelector(".project-card") && card.querySelector("h3") && card.querySelector("p"));
}

function updateProjectCards(lang) {
  const cards = getLeafProjectCards();
  const data = translations[lang].projects;

  // If markup is messy, still try to map first 4 real cards
  for (let i = 0; i < Math.min(cards.length, data.length); i++) {
    const h3 = cards[i].querySelector("h3");
    const p = cards[i].querySelector("p");
    if (h3) h3.textContent = data[i].title;
    if (p) p.innerHTML = data[i].html;
  }
}

// ================== CONTACT FORM ==================
// Load EmailJS from CDN if keys are provided
function loadEmailJSIfConfigured() {
  return new Promise((resolve) => {
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      resolve(false);
      return;
    }
    if (window.emailjs) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      resolve(true);
      return;
    }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js";
    s.onload = () => {
      if (window.emailjs) {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        resolve(true);
      } else {
        resolve(false);
      }
    };
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim() || "";
    const email = document.getElementById("email")?.value.trim() || "";
    const message = document.getElementById("message")?.value.trim() || "";

    if (!name || !email || !message) {
      alert(translations[currentLang].alertFill);
      return;
    }

    // Try EmailJS first (if configured)
    const canUseEmailJS = await loadEmailJSIfConfigured();

    if (canUseEmailJS) {
      try {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          to_email: EMAIL_TO,
          from_name: name,
          from_email: email,
          message
        });
        alert(translations[currentLang].alertSuccess(name));
        form.reset();
        return;
      } catch (err) {
        console.error("EmailJS error:", err);
        alert(translations[currentLang].alertFail);
        // Fall through to mailto
      }
    }

    // Fallback: open user's email client with prefilled content
    alert(translations[currentLang].alertFallback);
    const subject =
      (currentLang === "jp" ? "ポートフォリオからの連絡: " : "Portfolio Contact: ") + name;
    const body =
      (currentLang === "jp"
        ? `お名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}\n`
        : `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);
    const mailto =
      `mailto:${encodeURIComponent(EMAIL_TO)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    form.reset();
  });
}

// ================== INIT ==================
document.addEventListener("DOMContentLoaded", () => {
  // Language buttons
  const enBtn = document.getElementById("en-btn");
  const jpBtn = document.getElementById("jp-btn");
  if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));
  if (jpBtn) jpBtn.addEventListener("click", () => setLanguage("jp"));

  // Default language + first render
  setLanguage("jp");

  // Contact
  setupContactForm();
});
