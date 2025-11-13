import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact' },
    hero: { title: "Hi, I'm HEIN HTET ZIN", sub: 'CS student · Web & Backend dev' },
    cta: { viewProjects: 'View Projects' },
    footer: { rights: 'All rights reserved.' },

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
