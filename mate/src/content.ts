export type MATELandingPageContent = {
  heroSection: {
    heading: string;
    note?: string;
    subheading: string;
  };
  featuresSection: {
    heading: string;
    columns: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  forWhomSection: {
    heading: string;
    subheading: string;
    keyFeatures: Array<{
      imagePath: string;
      title: string;
      description: string;
    }>;
  };
  unlockedPotentialSection: {
    heading: string;
    description: string;
  };
  plansSection: {
    heading: string;
    plans: Array<{
      title: string;
      monthlyPrice: number;
      description: string;
      features: string[];
      callToAction?: {
        text: string;
        available: boolean;
      };
    }>
  };
  faqData: Array<{
    question: string;
    answer: string;
  }>;
};

export const content: MATELandingPageContent = {
  "heroSection": {
    "heading": "Elevate Your Code with MATE",
    "note": "*[meɪt], an acronym for Mentorship and AI Technology Enhancer.",
    "subheading": "Your AI-powered coding companion for flawless code&nbsp;review and mentoring"
  },
  "featuresSection": {
    "heading": "Features Designed for Excellence",
    "columns": [
      {
        "icon": "⚡️",
        "title": "Instant Code&nbsp;Review",
        "description": "Get real-time, automated feedback on your code's quality, efficiency, and potential errors."
      },
      {
        "icon": "⏱️",
        "title": "Accelerated Development",
        "description": "Speed up your coding process with AI-driven suggestions for improvement and error handling."
      },
      {
        icon: '🌐',
        title: "Right Where It Needed",
        description: "An usual browser extension, available right on GitHub and other platforms."
      },
      {
        icon: '🔋',
        title: "Batteries Included",
        description: "Zero-config and no API key required, just works as it is in your browser."
      }
      // {
      //   "icon": "👨‍💻",
      //   "title": "Collaborative Coding",
      //   "description": "Enhance teamwork with shared insights and streamlined review processes, ensuring code quality under tight deadlines."
      // },
      // {
      //   "icon": "💡",
      //   "title": "Transparent Insights",
      //   "description": "Gain clear, actionable insights into your code’s performance and areas for enhancement."
      // }
    ]
  },
  "forWhomSection": {
    "heading": "Designed For Diverse Developers",
    "subheading": "Whether you're a hired professional, a freelance coder, or just starting out.",
      "keyFeatures": [
        {
          title: "Full-Time Job Programmer",
          description: "<span class=>Close sprints on time</span> with less time spent on code&nbsp;reviews, without compromising on quality.",
          imagePath: "/senior_portrait.jpg"
        },
        {
          title: "Freelance Developer",
          description: "Deliver projects with confidence, ensuring minimal bugs and efficient solutions to impress your clients and secure your next gig.",
          imagePath: "/middle_portrait.jpg"
        },
        {
          title: "IT Student",
          description: "Sharpen your coding skills with in-depth feedback and wise recommendations.",
          imagePath: "/junior_portrait.jpg"
        },
      ],
  },
  "unlockedPotentialSection": {
    heading: "Unleashed Potential",
    description: "MATE leverages longer prompts to provide more comprehensive and accurate feedback, transforming good code into great code."
  },
  "plansSection": {
    "heading": "Choose Your Plan",
    plans: [
      {
        title: "Free",
        monthlyPrice: 0,
        description: "Unlimited use of MATE GPT at the OpenAI webview.",
        features: ['GPT'],
        callToAction: {
          text: 'Get Started',
          available: true,
        },
      },
      {
        title: "Individual",
        monthlyPrice: 9,
        description: "Get started with our affordable plan, offering basic code&nbsp;review features and support for individual developers.",
        features: ['GPT', 'Extensions for Popular Browsers'],
        callToAction: {
          text: 'Notify me when available',
          available: false,
        },
      },
      {
        title: "Enterprise",
        monthlyPrice: 18,
        description: "Unlock the full potential of MATE with advanced features, including multi-language support, unlimited repositories, and priority support.",
        features: ['GPT', 'Extensions for Popular Browsers', 'API', 'Priority Support', 'Secure Self-Hosted Instance', 'Premium tutorials'],
        callToAction: {
          text: 'Notify me when available',
          available: false,
        },
      }
    ]
  },
  faqData: [
    // {
    //   question: 'How big can the code file be?',
    //   answer: 'At the moment we estimate this to be around 200 lines of code. We\'ll let you know if a PR too large for us and we\'re working on increasing the limit on the size of PRs we can handle.',
    // },
    {
      question: 'How do I trigger a code&nbsp;review?',
      answer: 'When the MATE extension is installed in browser, visit a Github repo, open the file you want to be reviewed and click the extension icon to see the review.',
    },
    {
      question: 'Is my code secure?',
      answer: 'Your code and the review on it are cached locally on your computer. We do store a record of the PR and the code&nbsp;review results, though be informed that we send to the OpenAI\'s endpoint.',
    },
    {
      question: 'How do I get started?',
      answer: 'Login with GitHub and then add your repository within the Coderbuds dashboard. We\'ll try to setup your webhooks automatically, but if we can\'t we\'ll let you know.',
    },
    // {
    //   question: 'What does the integration with Teams and Slack do?',
    //   answer: 'They let your team know about any new pull requests so they can also provide reviews. We\'ll also let you know the status of your ai code&nbsp;review.',
    // },
    {
      question: 'Does it actually review the Pull Request?',
      answer: 'Currently it is only available for single files on GitHub. We are working hard to add PR as soon as possible.',
      // answer: 'Yes! You will get a code&nbsp;review from the AI - it will use your PR description and look at the code to decide whether to approve the PR or not. It will give you a summary of the code and recommendations on how to improve it.',
    },
    {
      question: 'If I try this out but prefer my humans in the end, what next?',
      answer: 'Yep, humans rule! If you prefer to use humans to review your code, you can cancel your subscription within the first 14 days and we will refund you.',
    },
    {
      question: 'Who built this?',
      answer: 'My name is Artyom and I\'m big into all the UX, AI and building products. Say hello on twitter <a href="https://twitter.com/apalevich" class="underline" target="_blank">@apalevich.</a>',
    },
    {
      question: 'Is this only for GitHub?',
      answer: 'Currently it is only available for GitHub. We are working hard to add GitLab in the future.',
    },
    {
      question: 'We need to integrate with our own Azure OpenAI Instance',
      answer: 'No problem - talk to us for Enterprise pricing.',
    }
  ],
};


  export const contentOld: MATELandingPageContent = {
    heroSection: {
        heading: "Elevate Your Code with MATE",
        subheading: "Mentorship and AI Technology Enhancer (MATE) is your AI-powered coding companion for flawless code&nbsp;review and mentoring."
    },
    featuresSection: {
        heading: "Features That Empower",
        columns: [
        {
          icon: '⏱️',
          title: "Instant code&nbsp;review",
          description: "Get real-time feedback with AI-driven insights to improve code quality instantly."
        },
        {
          icon: '🌐',
          title: "Right where it needed",
          description: "Browser extension, available right on GitHub and other platforms."
        },
        {
          icon: '🔄',
          title: "Multi-Language Support",
          description: "Whether you're working in JavaScript, Python, or any major programming language, MATE has you covered."
        },
        {
          icon: '🔋',
          title: "Batteries included",
          description: "No API key required, works as it is in your browser."
        }
        ]
    },
    forWhomSection: {
      heading: "Designed for Every Developer",
      subheading: "MATE meets the unique needs of diverse coding professionals.",
      keyFeatures: [
        {
          title: "Full-Time Job Programmer",
          description: "Accelerate project timelines and enhance code quality under tight deadlines.",
          imagePath: "/senior_portrait.jpg"
        },
        {
          title: "Freelance Developer",
          description: "Maintain high coding standards and quick project turnaround times, solo or in teams.",
          imagePath: "/middle_portrait.jpg"
        },
        {
          title: "IT Student",
          description: "Sharpen your coding skills with in-depth feedback and recommendations.",
          imagePath: "/junior_portrait.jpg"
        },
      ]
    },
    unlockedPotentialSection: {
        heading: "Unleashed Potential",
        description: "Experience the power of fine-tuning prompts in AI-driven code&nbsp;review. MATE leverages longer prompts to provide more comprehensive and accurate feedback, transforming good code into great code."
    },
    plansSection: {
      heading: "A plan for everyone",
      plans: [
        {
          title: "Free",
          monthlyPrice: 0,
          description: "Unlimited use of MATE GPT at the OpenAI webview.",
          features: ['ChatGPT'],
          callToAction: {
            text: 'Get Started',
            available: true,
          },
        },
        {
          title: "Individual",
          monthlyPrice: 9,
          description: "Get started with our affordable plan, offering basic code&nbsp;review features and support for individual developers.",
          features: ['ChatGPT', 'Extensions for Popular Browsers'],
          callToAction: {
            text: 'Notify me when available',
            available: false,
          },
        },
        {
          title: "Enterprise",
          monthlyPrice: 18,
          description: "Unlock the full potential of MATE with advanced features, including multi-language support, unlimited repositories, and priority support.",
          features: ['ChatGPT', 'Extensions for Popular Browsers', 'API', 'Priority Support', 'Secure Self-Hosted Instance', 'Premium tutorials'],
          callToAction: {
            text: 'Notify me when available',
            available: false,
          },
        }
      ]
    },
    faqData: [
      // {
      //   question: 'How big can the code file be?',
      //   answer: 'At the moment we estimate this to be around 200 lines of code. We\'ll let you know if a PR too large for us and we\'re working on increasing the limit on the size of PRs we can handle.',
      // },
      {
        question: 'How do I trigger a code&nbsp;review?',
        answer: 'When the MATE extension is installed in browser, visit a Github repo, open the file you want to be reviewed and click the extension icon to see the review.',
      },
      {
        question: 'Is my code secure?',
        answer: 'Your code and the review on it are cached locally on your computer. We do store a record of the PR and the code&nbsp;review results, though be informed that we send to the OpenAI\'s endpoint.',
      },
      {
        question: 'How do I get started?',
        answer: 'Login with GitHub and then add your repository within the Coderbuds dashboard. We\'ll try to setup your webhooks automatically, but if we can\'t we\'ll let you know.',
      },
      // {
      //   question: 'What does the integration with Teams and Slack do?',
      //   answer: 'They let your team know about any new pull requests so they can also provide reviews. We\'ll also let you know the status of your ai code&nbsp;review.',
      // },
      {
        question: 'Does it actually review the Pull Request?',
        answer: 'Currently it is only available for single files on GitHub. We are working hard to add PR as soon as possible.',
        // answer: 'Yes! You will get a code&nbsp;review from the AI - it will use your PR description and look at the code to decide whether to approve the PR or not. It will give you a summary of the code and recommendations on how to improve it.',
      },
      {
        question: 'If I try this out but prefer my humans in the end, what next?',
        answer: 'Yep, humans rule! If you prefer to use humans to review your code, you can cancel your subscription within the first 14 days and we will refund you.',
      },
      {
        question: 'Who built this?',
        answer: 'My name is Artyom and I\'m big into all the UX, AI and building products. Say hello on twitter <a href="https://twitter.com/apalevich" class="underline" target="_blank">@apalevich.</a>',
      },
      {
        question: 'Is this only for GitHub?',
        answer: 'Currently it is only available for GitHub. We are working hard to add GitLab in the future.',
      },
      {
        question: 'We need to integrate with our own Azure OpenAI Instance',
        answer: 'No problem - talk to us for Enterprise pricing.',
      }
    ],
};