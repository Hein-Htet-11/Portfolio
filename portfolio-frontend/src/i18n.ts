import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: { title: "Hi, I'm HEIN HTET ZIN", sub: 'CS student · Web & Backend dev' },
    cta: { viewProjects: 'View Projects' },
    footer: { rights: 'All rights reserved.' },

    home: {
  badge: 'CS Student · Aspiring SE & PM',
  headline: 'Building reliable, maintainable systems one project at a time.',
  subheadline:
    'I focus on web and backend development, writing clean code, and learning how to deliver dependable software in team environments.',
  primaryButton: 'View Projects',
  secondaryButton: 'Download Resume (EN)',
  focusTitle: 'What I focus on',
  focusItems: {
  f1Title: 'Web & Backend Development',
  f1Body:
    'Designing and implementing RESTful backends and web applications with clean, maintainable code.',

  f2Title: 'Fundamentals & Code Quality',
  f2Body:
    'Strengthening CS fundamentals, improving code readability, and practicing structured problem-solving.',

  f3Title: 'Continuous Learning',
  f3Body:
  'Improving my overall programming skills and technical foundations to prepare for future software engineering roles, while actively studying for Java OCP and JLPT N1 to broaden my professional capabilities.'
}
,
  featuredTitle: 'Selected Projects',
  featuredViewAll: 'View all projects'
},

contact: {
  title: 'Get in touch',
  subtitle:
    'If you are interested in working together, have questions, or just want to say hello, feel free to contact me.',
  emailLabel: 'Email',
  emailHint: 'You can also contact me directly by email.',
  form: {
    nameLabel: 'Name',
    emailLabel: 'Your email',
    messageLabel: 'Message',
    sendButton: 'Open email app',
    helper: 'Your message will open in your email application, where you can review and send it.'
  }
},
    about: {
      title: 'About Me',
      intro:
        'I am a Burmese student currently studying Information Science at Kyoto Computer Gakuin (KCG), Japan, and set to graduate in March 2027. Before joining KCG, I studied Computer Science for two years at the University of Information Technology (UIT) in Myanmar and completed a Japanese language program at Daiwa Academy in Osaka. I am passionate about software engineering—especially backend and system development—and continually improving my technical and communication skills to contribute in team environments.',
      goal:
        'My long-term goal is to build a strong foundation as a Software Engineer and grow into a Project Manager who can lead teams and deliver reliable, user-focused systems. Outside academics, I enjoy art and hobby game creation, which helps me practice design thinking and storytelling.',
      highlights: {
        h1: 'Kyoto · Japan',
        h2: 'KCG · Information Science',
        h3: 'Languages: English · Japanese · Burmese'
      },
      certsTitle: 'Certificates',
      certs: [
        { name: 'IT Passport (IPA)', date: '2019-10' },
        { name: 'FE (Fundamental Engineer)', date: '2022-10' },
        { name: 'TOEIC (870)', date: '2024-10' },
        { name: 'JLPT (N2)', date: '2024-12' }
      ]
    }
  },

  ja: {
    nav: { home: 'ホーム', projects: 'プロジェクト', about: '自己紹介', contact: '連絡' },
    hero: { title: 'はじめまして、へインテッジンです', sub: '情報科学専攻｜Web・バックエンド開発' },
    cta: { viewProjects: 'プロジェクトを見る' },
    footer: { rights: '無断転載を禁じます。' },

    home: {
  badge: 'CS 学生 · 未来のSE／PM',
  headline: '信頼性の高いシステムを、着実に作り上げていく。',
  subheadline:
    'Web・バックエンド開発を中心に、チームで扱いやすいコードを書くことや、安定したソフトウェアを提供するための学習に力を入れています。',
  primaryButton: 'プロジェクトを見る',
  secondaryButton: '英語レジュメをダウンロード',
  focusTitle: '現在の注力分野',
  focusItems: {
  f1Title: 'Web・バックエンド開発',
  f1Body:
    'REST API や Web アプリケーションを設計・実装し、保守しやすいコードを意識しています。',

  f2Title: '基礎力とコード品質',
  f2Body:
    'CS の基礎を強化しつつ、読みやすく整ったコードを書くことや、論理的な問題解決を重視しています。',

  f3Title: '継続的な学習',
  f3Body:
  '将来のソフトウェアエンジニア職に向けて、プログラミング技術と基礎力の強化に取り組んでいます。また、専門性と業務対応力を高めるために、Java OCP と JLPT N1 の学習も進めています。'
}
,
  featuredTitle: 'ピックアッププロジェクト',
  featuredViewAll: 'すべてのプロジェクトを見る'
},

contact: {
  title: 'お問い合わせ',
  subtitle:
    '一緒にお仕事をしてみたい方、ご質問のある方、または簡単なご挨拶でも、気軽にご連絡ください。',
  emailLabel: 'メールアドレス',
  emailHint: '直接メールでのご連絡も歓迎です。',
  form: {
    nameLabel: 'お名前',
    emailLabel: 'ご連絡用メールアドレス',
    messageLabel: 'メッセージ',
    sendButton: 'メールアプリを開く',
    helper: '入力内容を元にメールアプリが開きますので、内容を確認して送信してください。'
  }
},
    about: {
      title: '自己紹介',
      intro:
        '現在、京都コンピュータ学院（KCG）情報科学科に在学しており、2027年3月に卒業予定です。ミャンマーの情報技術大学（UIT）で2年間コンピュータサイエンスを学んだ後、大阪の大和アカデミーで日本語課程を修了しました。ソフトウェアエンジニアリング、特にバックエンドやシステム開発に関心があり、チーム開発における技術力とコミュニケーション能力の向上に努めています。',
      goal:
        'まずはソフトウェアエンジニアとして基礎を固め、チームを率いて信頼性の高いシステムを実現できるプロジェクトマネージャーへ成長することを目指しています。学業以外では、趣味としてアート制作やゲーム制作も行い、デザイン思考や表現力を磨いています。',
      highlights: {
        h1: '京都 · 日本',
        h2: 'KCG · 情報科学科',
        h3: '言語：英語 · 日本語 · ビルマ語'
      },
      certsTitle: '資格',
      certs: [
        { name: 'ITパスポート（IPA）', date: '2019-10' },
        { name: '基本情報技術者（FE）', date: '2022-10' },
        { name: 'TOEIC（870）', date: '2024-10' },
        { name: '日本語能力試験（N2）', date: '2024-12' }
      ]
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || 'en',
  fallbackLocale: 'en',
  messages
})
