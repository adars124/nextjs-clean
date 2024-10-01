## Project Structure

```
.
├── README.md
├── app
│   ├── (auth)
│   │   ├── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── register
│   │       └── page.tsx
│   ├── (protected)
│   │   ├── courses
│   │   │   ├── [courseId]
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── insights
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── learning
│   │   │   ├── [courseId]
│   │   │   │   ├── [moduleId]
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── sutra
│   │       ├── broker-ratings
│   │       │   └── page.tsx
│   │       ├── bulk-ipo
│   │       │   └── page.tsx
│   │       ├── layout.tsx
│   │       ├── news-letter
│   │       │   └── page.tsx
│   │       ├── page.tsx
│   │       ├── portfolio
│   │       │   └── page.tsx
│   │       ├── ratio-analysis
│   │       │   └── page.tsx
│   │       ├── screeners
│   │       │   └── page.tsx
│   │       ├── stock-doko
│   │       │   └── page.tsx
│   │       └── valuation
│   │           └── page.tsx
│   ├── about
│   │   └── page.tsx
│   ├── api
│   │   ├── courses
│   │   │   └── route.ts
│   │   ├── insights
│   │   │   └── route.ts
│   │   └── news
│   │       └── route.ts
│   ├── contact
│   │   └── page.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── news
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── stockpedia
│   │   ├── disclaimer
│   │   │   └── page.tsx
│   │   ├── faq
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── wiki
│   │       └── page.tsx
│   └── tools
│       ├── bonus-adjust
│       │   └── page.tsx
│       ├── buy-sell
│       │   └── page.tsx
│       ├── compound-interest
│       │   └── page.tsx
│       ├── dividend
│       │   └── page.tsx
│       ├── inflation-calc
│       │   └── page.tsx
│       ├── layout.tsx
│       ├── page.tsx
│       ├── right-share
│       │   └── page.tsx
│       ├── sip
│       │   └── page.tsx
│       ├── swp
│       │   └── page.tsx
│       └── wacc
│           └── page.tsx
├── components
│   ├── common
│   │   └── TagList.tsx
│   ├── courses
│   │   ├── CourseCard.tsx
│   │   └── CourseDetails.tsx
│   ├── forms
│   │   ├── AuthForm.tsx
│   │   └── CourseEnrollment.tsx
│   ├── insights
│   │   ├── AuthorInfo.tsx
│   │   ├── InsightCard.tsx
│   │   └── InsightList.tsx
│   ├── layouts
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   ├── news
│   │   ├── NewsCard.tsx
│   │   └── NewsList.tsx
│   ├── stockpedia
│   │   └── StockpediaCard.tsx
│   ├── tools
│   │   └── ToolCard.tsx
│   └── ui
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── CustomImage.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Spinner.tsx
│       └── Table.tsx
├── config
│   ├── navigation.ts
│   └── seo.ts
├── hooks
│   ├── useAuth.ts
│   ├── useCourses.ts
│   ├── useInsights.ts
│   ├── useNews.ts
│   ├── useTools.ts
│   └── useUser.ts
├── lib
│   ├── api.ts
│   ├── constants.ts
│   ├── navs
│   │   ├── stockpedia.tsx
│   │   └── tools.tsx
│   └── utils.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   └── images
├── styles
│   ├── globals.css
│   └── variables.css
├── tailwind.config.ts
├── tsconfig.json
└── types
    ├── api.ts
    ├── course.ts
    ├── insight.ts
    ├── news.ts
    ├── ui.ts
    └── user.ts
```

## Technologies Used

- NextJS
- Tailwind CSS
- Lucide React
- Prettier
- Eslint

## Installation Procedure

1. Clone the Repository: `git clone git@github.com:adars124/nextjs-clean.git`

2. Change Directory: `cd nextjs-clean`

3. Install Dependencies: `npm i` or `npm install`

4. Start the app: `npm run dev`
