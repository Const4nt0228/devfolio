module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sangsupark.netlify.app`,
    // Your Name
    name: 'Sangsu Park',
    // Main Site Title
    title: `박상수 | 새로운것에 도전하는 개발자`,
    // Description that goes under your name in main bio
    description: `현재는 원트리즈뮤직에서 음악플레이어를 개발하고있습니다`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/Const4nt0228`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `IoT, 임베디드와 모바일 애플리케이션, 백엔드 서버 개발을 좋아하는 신입 개발자입니다. 현재는 사회적 약자를 위한 프로젝트를 진행중입니다. 기술의 도움을 통해 시각장애인들이 비장애인들과 동일한 사회를 만들어가는 것이 제 꿈입니다.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '눈으로 치는 피아노 눈치피아노 : Noonchi-Piano',
        description:
          '2021 KPU Capstone Design Contest 벤처기업협회장 수상작입니다. 초보자들이 피아노를 쉽게 배울수 있도록 만든 애플리케이션으로, 통신 서버 구축과 음계 인식 모듈을 개발했습니다.  2020.09~ 2021.09',
        link: 'https://github.com/NoonChi-PIANO/noonchi-piano-rep',
      },
      {
        name: '전신주 안전관리 시스템',
        description:
          '한국산업기술대학교 K-Digital Tranning의 최종프로젝트입니다. 팀장으로써 전체 프로그램 설계와, 라즈베리파이를 이용한 IoT 시스템 구축 및 Node-Red 설계를 하였습니다. 최종 프로젝트 우승작입니다.  2021.07~2021.08 ',
        link: 'https://github.com/KPU-K-DIGITAL-IOT/KDigitalIoTProject',
      },
	  {
        name: '임베디드 프로젝트 : 뱀 게임',
        description:
          '한국산업기술대학교 임베디드 시스템 과목 최종 프로젝트입니다. Linux 상에서 C언어로 제작된 뱀게임 로직과 Achro-EM Dot Matrix 제어부분을 구현하였습니다.  2020.09~2020.12 ',
        link: 'https://github.com/Const4nt0228/Embedded_Snake_Game',
      },
	  {
        name: 'IoT 프로젝트 : 뱀 게임',
        description:
          '한국산업기술대학교 IoT 시스템 과목 최종 프로젝트입니다. 라즈베리파이의 라즈비안OS 상에서 Python으로 동작하는 라인트레이서 자동차입니다. 회로 설계, 라인트레이싱 코드, HTML 조종 페이지를 제작하였습니다.  2021.03~2020.06 ',
        link: 'https://github.com/Const4nt0228/Embedded_Snake_Game',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '원트리즈뮤직',
        description: '2021.09~ Now, 인턴, Plug & Play 형식의 매장 음악플레이어 셋탑박스를 개발하고있습니다. ',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'K-Digital Tranning',
        description: '2021.05~ 2021.08, IoT 스마트홈 교육과정을 이수했습니다. AWS, IBM, Linux, Embeds, Raspberry Pi 등 IoT에 관한 전반적인 기술을 습득했습니다',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'IoT와 임베디드 프로젝트를 진행할때는 주로 C, Python 을 많이 이용합니다. 안드로이드 앱 개발은 주로 Java를 사용하며 토이 프로젝트들은 Kotlin으로 진행하고있습니다. 백엔드 서버는 PHP를 사용하여 구축하고있습니다',
      },
      {
        name: 'Databases',
        description: 'MySQL, MariaDB',
      },
      {
        name: 'Other',
        description:
          'Amazon Web Services (AWS), Naver Cloud',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
