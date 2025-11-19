type PortfolioItem = {
  title: string,
img: string
  description: string
  link: string,
  category: 'web' | 'ml',
  id:number,
  tech:string[]
}


export const dataportfolio: PortfolioItem[] = [
   {
    id:1,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    title: 'ICPRS: Instance Conditioned Part Representation for Structured Segmentation',
    img: "data/images/m2f.jpg",
    description: 'Vison Language modal: At Inference time, modal jointly predicts both Instance and part segmentation.',
    link: 'https://github.com/kommareddysakethreddy/M2F_PartImageNet',
    category:'ml'
  },
  {
    id:1,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    title: 'Med-Vision: Multimodal RAG for Medical Learning',
    img: "data/images/RAG.jpg",
    description: 'A multi-modal retrieval-augmented generation system to generate medical reports and answer questions from clinical images.',
    link: 'https://github.com/kommareddysakethreddy/MedVision',
    category:'ml'
  },
  {
    id:2,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'NextGen Portfolio Website',
    img: "data/images/portfolio.jpg",
    description: 'Built with Next.js, Tailwind, and Node.js, showcasing responsive design and optimized performance.',
    link: 'https://github.com/kommareddysakethreddy/NextGen',
    category:'web'
  },
  {
    id:3,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'SRGAN - Image Super-Resolution',
    img: "data/images/GAN.jpg",
    description: 'Enhanced low-res images by 4x using SRGAN, with advanced loss functions and PSNR boost of 15%.',
    link: 'https://github.com/kommareddysakethreddy/SRGAN_2X_Resolution',
    category:'ml'
  },
  {
    id:4,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'ResumeAI - LLM Resume Generator',
    img: "data/images/ResumeAI.jpg",
    description: 'AI-powered resume builder using LLMs to generate tailored resumes from user inputs.',
    link: 'https://github.com/kommareddysakethreddy/resumeAI',
    category:'ml'
  },
  {
    id:5,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'Speech Recognition System',
    img: "data/images/SpeechRecognition.jpg",
    description: 'Used CNNs with augmented data to reduce training time by 25% and improve transcription accuracy.',
    link: 'https://github.com/kommareddysakethreddy/Speech-Recognition-System',
    category:'ml'
  },
  {
    id:6,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'Tour Review System with NLP',
    img: "data/images/TourReview.png",
    description: 'Built an intelligent analyzer with RNN and topic modeling to classify user sentiments with 92% accuracy.',
    link: 'https://github.com/kommareddysakethreddy/Tour-Review-System',
    category:'ml'
  },
  {
    id:7,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'VEHERE - Tour Management System',
    img: 'data/images/VEHERE.jpg',
    description: 'Full-stack platform with JWT auth, Razorpay, Nodemailer, and Mapbox for secure, smooth travel booking.',
    link: 'https://vehere.onrender.com/',
    category:'web'
  },
  {
    id:8,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'OSU Student Health Portal Redesign',
    img: "data/images/RedesignHCI.png",
    description: 'Redesigned the OSU appointment system using Figma and HCI principles; cut steps from 12 to 4.',
    link: 'https://github.com/kommareddysakethreddy/UX-Redesign',
    category:'web'
  },
  {
    id:9,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    
    title: 'VIEAT - Online Food Ordering Platform',
    img: "data/images/VIEAT.jpg",
    description: 'Feature-rich food delivery system with payment gateway, email/OTP verification, and PHP backend.',
    link: 'https://drive.google.com/file/d/1nlMA7AAbYJKYySYZ3uO-OyE2w9VtNESq/view?usp=sharing&usp=embed_facebook',
    category:'web'
  },
  
]
