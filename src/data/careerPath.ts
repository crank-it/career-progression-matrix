export interface Skill {
  id: string;
  title: string;
  description: string;
  level: number;
  prerequisites: string[];
  tools: string[];
  outcomes: string[];
  timeframe: string;
  completed?: boolean;
}

export const careerPath: Skill[] = [
  {
    id: 'current-status',
    title: 'Current Status',
    description: '80% AutoCAD work, 20% supporting very basic video distribution',
    level: 0,
    prerequisites: [],
    tools: ['AutoCAD', 'Social Media Platforms'],
    outcomes: [
      'Create precise orthotic designs',
      'Post marketing content to social channels',
      'Basic video upload and distribution support'
    ],
    timeframe: 'Current',
    completed: true
  },
  {
    id: 'level-one',
    title: 'Level One: Video Content Mastery',
    description: 'Master video editing and content distribution for enhanced social media presence',
    level: 1,
    prerequisites: ['current-status'],
    tools: ['CapCut', 'Social Media Analytics', 'Content Calendar'],
    outcomes: [
      'Edit and produce engaging video content',
      'Create multi-platform distribution strategy',
      'Increase engagement rates by 50%+',
      'Build reusable content templates'
    ],
    timeframe: '2-3 months'
  },
  {
    id: 'level-two',
    title: 'Level Two: Web Development',
    description: 'Enable rapid website updates and custom development without code dependencies',
    level: 2,
    prerequisites: ['level-one'],
    tools: ['Webflow', 'CMS Management', 'Responsive Design', 'SEO Tools'],
    outcomes: [
      'Make website updates independently',
      'Design and launch new landing pages',
      'Implement client feedback within hours',
      'Integrate forms and interactive elements',
      'Optimize site performance and SEO'
    ],
    timeframe: '3-4 months'
  },
  {
    id: 'level-three',
    title: 'Level Three: AI-Powered Automation',
    description: 'Leverage AI development tools to automate workflows and solve complex business challenges',
    level: 3,
    prerequisites: ['level-two'],
    tools: ['Claude Code', 'Terminal', 'Git', 'APIs', 'Data Analytics'],
    outcomes: [
      'Automate repetitive administrative tasks',
      'Build custom tools for team efficiency',
      'Analyze business data for insights',
      'Create integrations between platforms',
      'Propose and implement technical solutions',
      'Become the go-to digital innovation specialist'
    ],
    timeframe: '4-6 months'
  }
];
