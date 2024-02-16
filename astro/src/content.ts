export type MATELandingPageContent = {
  HeroSection: {
    Heading: string;
    Subheading: string;
  };
  FeaturesSection: {
    Heading: string;
    Columns: Array<{
      Icon: string;
      Title: string;
      Description: string;
    }>;
  };
  ForWhomSection: {
    Heading: string;
    Subheading: string;
    KeyFeatures: Array<{
      ImagePath: string;
      Title: string;
      Description: string;
    }>;
  };
  UnlockedPotentialSection: {
    Heading: string;
    Description: string;
  };
  PlansSection: {
    Heading: string;
    Plans: Array<{
      Title: string;
      MonthlyPrice: number;
      Description: string;
      Features: string[];
      CallToAction?: {
        Text: string;
        Available: boolean;
      };
    }>
  };
  FAQData: Array<{
    question: string;
    answer: string;
  }>;
};

export const content: MATELandingPageContent = {
    "HeroSection": {
        "Heading": "Elevate Your Code with MATE",
        "Subheading": "Mentorship and AI Technology Enhancer (MATE) is your AI-powered coding companion for flawless code review and mentoring."
    },
    "FeaturesSection": {
        "Heading": "Features That Empower",
        "Columns": [
        {
          "Icon": '⏱️',
          "Title": "Instant Code Review",
          "Description": "Get real-time feedback with AI-driven insights to improve code quality instantly."
        },
        {
          "Icon": '🌐',
          "Title": "Right where it needed",
          "Description": "Browser extension, available right on GitHub and other platforms."
        },
        {
          "Icon": '🔄',
          "Title": "Multi-Language Support",
          "Description": "Whether you're working in JavaScript, Python, or any major programming language, MATE has you covered."
        },
        {
          "Icon": '🔋',
          "Title": "Batteries included",
          "Description": "No API key required, works as it is in your browser."
        }
        ]
    },
    "ForWhomSection": {
      "Heading": "Designed for Every Developer",
      "Subheading": "MATE meets the unique needs of diverse coding professionals.",
      "KeyFeatures": [
        {
          "Title": "Full-Time Job Programmer",
          "Description": "Accelerate project timelines and enhance code quality under tight deadlines.",
          "ImagePath": "/senior_portrait.jpg"
        },
        {
          "Title": "Freelance Developer",
          "Description": "Maintain high coding standards and quick project turnaround times, solo or in teams.",
          "ImagePath": "/middle_portrait.jpg"
        },
        {
          "Title": "IT Student",
          "Description": "Sharpen your coding skills with in-depth feedback and recommendations.",
          "ImagePath": "/junior_portrait.jpg"
        },
      ]
    },
    "UnlockedPotentialSection": {
        "Heading": "Unleashed Potential",
        "Description": "Experience the power of fine-tuning prompts in AI-driven code review. MATE leverages longer prompts to provide more comprehensive and accurate feedback, transforming good code into great code."
    },
    "PlansSection": {
      Heading: "A plan for everyone",
      Plans: [
        {
          "Title": "Free",
          "MonthlyPrice": 0,
          "Description": "Unlimited use of MATE GPT at the OpenAI webview.",
          "Features": ['ChatGPT'],
          "CallToAction": {
            "Text": 'Get Started',
            "Available": true,
          },
        },
        {
          "Title": "Individual",
          "MonthlyPrice": 9,
          "Description": "Get started with our affordable plan, offering basic code review features and support for individual developers.",
          "Features": ['ChatGPT', 'Extensions for Popular Browsers'],
          "CallToAction": {
            "Text": 'Notify me when available',
            "Available": false,
          },
        },
        {
          "Title": "Enterprise",
          "MonthlyPrice": 18,
          "Description": "Unlock the full potential of MATE with advanced features, including multi-language support, unlimited repositories, and priority support.",
          "Features": ['ChatGPT', 'Extensions for Popular Browsers', 'API', 'Priority Support', 'Secure Self-Hosted Instance', 'Premium tutorials'],
          "CallToAction": {
            "Text": 'Notify me when available',
            "Available": false,
          },
        }
      ]
    },
    FAQData: [
      // {
      //   question: 'How big can the code file be?',
      //   answer: 'At the moment we estimate this to be around 200 lines of code. We\'ll let you know if a PR too large for us and we\'re working on increasing the limit on the size of PRs we can handle.',
      // },
      {
        question: 'How do I trigger a code review?',
        answer: 'When the MATE extension is installed in browser, visit a Github repo, open the file you want to be reviewed and click the extension icon to see the review.',
      },
      {
        question: 'Is my code secure?',
        answer: 'Your code and the review on it are cached locally on your computer. We do store a record of the PR and the code review results, though be informed that we send to the OpenAI\'s endpoint.',
      },
      {
        question: 'How do I get started?',
        answer: 'Login with GitHub and then add your repository within the Coderbuds dashboard. We\'ll try to setup your webhooks automatically, but if we can\'t we\'ll let you know.',
      },
      // {
      //   question: 'What does the integration with Teams and Slack do?',
      //   answer: 'They let your team know about any new pull requests so they can also provide reviews. We\'ll also let you know the status of your ai code review.',
      // },
      {
        question: 'Does it actually review the Pull Request?',
        answer: 'Yes! You will get a code review from the ai - it will use your PR description and look at the code to decide whether to approve the PR or not. It will give you a summary of the code and recommendations on how to improve it.',
      },
      {
        question: 'If I try this out but prefer my humans in the end, what next?',
        answer: 'Yep, humans rule! If you prefer to use humans to review your code, you can cancel your subscription within the first 14 days and we will refund you.',
      },
      {
        question: 'Who built this?',
        answer: 'My name is Artyom and I\'m big into all the UX, AI and building products. Say hello on twitter @apalevich.',
      },
      {
        question: 'Is this only for GitHub?',
        answer: 'Currently it is only available for GitHub. We are working harn to add GitLab in the future.',
      },
      {
        question: 'We need to integrate with our own Azure OpenAI Instance',
        answer: 'No problem - talk to us for Enterprise pricing.',
      }
    ],
};