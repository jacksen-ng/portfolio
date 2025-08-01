const ja = {
    // Navbar
    nav: {
        home: 'ホーム',
        about: 'プロフィール',
        projects: 'プロジェクト',
        experience: '経歴',
    },
    
    // Home page
    home: {
        greeting: "こんにちは、ジャックセンです",
        title: "武蔵野大学 データサイエンス学部",
    },
    
    // About page
    about: {
        greeting: "こんにちは👋",
        intro: "私の名前はウン　ジャックセンです。現在、マレーシアから来た武蔵野大学のデータサイエンス学部の学生です。",
        major: "専攻はデータサイエンスで、Web開発とAIを活用した開発プロセスの効率化に興味があります。将来はAIエンジニアになりたいと思っています。",
        journeyTitle: "💫 私の旅について",
        journeyText1: "高校卒業後、日本の文化と技術に魅了されていたため、日本への留学を決定しました。",
        journeyText2: "日本での旅は、日本語を学ぶためのギャップイヤーから始まり、この期間に日本語の勉強をしつつ、大学の受験をしました。",
        journeyText3: "１年後、武蔵野大学に入学し、データサイエンスの分野での旅を始めました。",
        careerTitle: "╰┈➤ キャリア目標",
        careerText: "将来はAIエンジニアになりたいと思っています。なぜなら、将来的にAIの発展がますます重要になると考えているからです。例えば、Web開発はAIによってますます自動化されるでしょう。また、AIは開発者がコードをより効率的に書くのを助けることができます。人々はAIにアイデアを与えるだけで、AIが開発者のためにコードを生成します。",
        skillsTitle: "🌟 スキル",
        skillsText1: "React.js、Next.js、Tailwind CSSなどの最新のWeb開発技術に慣れています。",
        skillsText2: "また、Linuxオペレーティングシステムとコマンドラインインターフェースにも慣れています。",
    },
    
    // Projects page
    projects: {
        project1Title: "プロジェクト1：テキストから3DCGシミュレーション",
        project1Text1: "このプロジェクトはテキストから3DCGシミュレーションを生成するプロジェクトです。Unreal Engine 5.3を使用して3DCGシミュレーションを作成しました。",
        project1Text2: "このプロジェクトでは、テキストから3DCGを生成する新しい方法を提案しました。このプロジェクトはバスケットボールの戦術に関するものです。最近、人々はホワイトボードを使ってバスケットボールの戦術を描いています。しかし、この方法は効率的ではなく、理解しやすいものではありません。特に新しいバスケットボール選手は、静的なホワイトボードの図からプレーや動きを視覚化するのに苦労しています。この問題を解決するために、バスケットボールのテキスト説明を3Dビジュアライゼーションに変換するシステムを開発しました。ユーザーは自然言語を使用して戦術的な指示を入力でき、システムは自動的に選手の動きとプレーの展開を示すアニメーション3Dシーンを生成します。また、このプロジェクトに関する論文も書きました。",
        project2Title: "プロジェクト2：NBAコートビジュアライゼーション",
        project2Text1: "このプロジェクトはNBAコートビジュアライゼーションプロジェクトです。",
        project2Text2: "また、このウェブサイトは私の最初のプロジェクトです。PHPとMySQLを使用してNBAコートビジュアライゼーションを作成しました。人々はコートがどこにあるかをより簡単に理解できます。",
        project3Title: "プロジェクト3：FastAPIを使用したディープラーニングモデル",
        project3Text1: "このプロジェクトはFastAPIを使用したディープラーニングモデルです。",
        project3Text2: "tensorflowを使用してディープラーニングモデルを作成しました。また、FastAPIを使用して果物分類のAPIを作成しました。",
        project4Title: "プロジェクト4：ブログ",
        project4Text1: "このプロジェクトはNext.jsとTailwind CSSを使用したブログです。",
        project4Text2: "Vercelでホスティングしています。",
        viewOnGithub: "Githubで見る",
        viewPDF: "PDFを見る",
        viewWebsite: "ウェブサイトで見る",
        techStackTitle: "使用技術",
    },
    
    // Experience page
    experience: {
        educationTitle: "学歴 🎓",
        musashino: "武蔵野大学",
        dataScience: "データサイエンス",
        meros: "メロス言語学校",
        japanese: "日本語",
        chineseHighSchool: "Chinese High School",
        internshipTitle: "インターンシップ経験 💼",
        internshipKatitasName: "株式会社カチタス",
        internshipText: "不動産情報サイトのフロントエンドとバックエンドの開発、UI/UXの改善",
        internshipGenieeName: "株式会社ジーニー",
        internshipText2: "カレンダーアプリの開発、UI/UXの改善",
        internshipGenieePrize: "上位5位入賞🏅",
        techUsed: "使用技術",
        activitiesTitle: "活動 🚀",

        shiftAgentTitle: "AIシフト管理エージェント「Shift Agent」- Google Cloud AIハッカソン",
        shiftAgentText: "Google Cloud AIハッカソン2.0で開発した、自律型AIシフト管理エージェントです。GeminiとLangChainを活用し、単なるシフト自動作成に留まらず、生成されたシフト案をAI自身が「評価」と「修正」を繰り返すループを実装しました。これにより、人員配置や人件費の制約を満たしながら、継続的にシフトの質を向上させることが可能です。バックエンドはDDD（ドメイン駆動設計）に基づき構築し、複雑なビジネスロジックに対応できる拡張性の高いアーキテクチャを実現しました。",
        shiftAgentDetail: "- GeminiとLangChainを駆使した評価・修正ループによる自律的なシフト最適化\n- DDDアーキテクチャによる、保守性と拡張性の高いバックエンド設計\n- Cloud SQL, Cloud Runなど、Google Cloudサービス群を活用した実践的なクラウドネイティブ開発",
        viewArticle: "記事を読む",

        geekHackathon: "ハッカソンプロジェクト – Geek CAMP Hackathon 2025 Vol.4",
        geekPrize: "努力賞受賞🏅",
        geekPeriod: "2025年5月 – 2025年6月",
        geekText: "創造的なAIハッカソンに参加し、冷蔵庫の食材を基にGemini APIを使用して架空のレシピを生成するユニークな料理ウェブアプリを共同開発しました。",
        geekDetail: "- Next.jsとTailwind CSSを使用してフロントエンドUIを開発\n- Geminiのテキスト・画像生成APIを統合\n- アイデアピッチ、UX企画、チームプレゼンテーションに貢献\n- 100以上のチームの中で「努力賞」を受賞",
        zennHackathon: "Zenn-ハッカソン",
        zennText: "Gemini APIを使用したノート要約に焦点を当てたチームプロジェクトをリードしました。React.js、FastAPI、PostgreSQLを使用したフルスタックアプリケーションを開発しました。",
        intageTitle: "インテージ研究開発コンペティション",
        intageText: "LLM技術を使用したバスケットボール戦術に関する研究プロジェクト。革新的な3DCGシミュレーションプレゼンテーション方法を開発しました。",
        fitTitle: "FIT 2024 情報科学技術フォーラム",
        fitText: "第23回情報技術フォーラムでLLMを使用したバスケットボール戦術に関する研究を発表しました。",
        viewProject: "プロジェクトを見る",
        viewPresentation: "プレゼンテーションを見る",
        scholarshipTitle: "奨学金と賞 🏆",
        nitoriScholarship: "ニトリ奨学金",
        jassoScholarship: "JASSO奨学金",
        lshScholarship: "LSHアジア奨学金",
    },
    
    // Common
    languageSwitch: "English",
};

export default ja; 