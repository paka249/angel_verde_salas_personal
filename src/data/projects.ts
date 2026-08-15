export interface Project {
  id: string
  name: string
  description: string
  image: string
  githubUrl?: string
  liveUrl?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'health-fitness-pro',
    name: 'HealthFitnessPro',
    description:
      'A full-stack fitness platform built with a small team. I led the UX/UI design and React frontend for the nutrition, account, and workout history modules, and architected the database schemas and data models behind the custom workout creator and exercise library, integrating cleanly with a FastAPI backend. I also built a modular, reusable component architecture and put together a unit testing plan to keep the app stable as it grew.',
    image: '/projects/coverphoto.jpg',
    githubUrl: 'https://github.com/paka249/HealthFitnessPro',
    
    tags: ['React', 'FastAPI', 'UX/UI'],
  },
  {
    id: 'fifa-player-performance',
    name: 'Predicting Player Performance from FIFA Attributes',
    description:
      'A group project predicting overall ratings for youth soccer players from FIFA player-attribute data. I used PCA to reduce dimensionality and surface patterns in player traits, then compared Lasso regression, stepwise selection, and decision trees to find the strongest predictors by position — Lasso consistently won out, and the results pointed to traits worth watching for scouting and talent evaluation.',
    image: '/projects/Untitled presentation.svg',
    githubUrl: 'https://github.com/paka249/replace-with-repo-name',
    tags: ['R', 'Statistics', 'Data Science'],
  },
  {
    id: 'image-compression',
    name: 'Image Compression Using FFT, DCT, and DWT',
    description:
      'An exploration of frequency-domain image compression in Python and MATLAB, applying the Fast Fourier Transform, Discrete Cosine Transform, and Discrete Wavelet Transform to grayscale images. I implemented low-pass filtering to keep the low-frequency components, reconstructed the images via inverse transforms, and compared the three methods on file size, visual quality, and runtime.',
    image: '/projects/rep1.jpeg',
    githubUrl: 'https://github.com/paka249/Image-compression-Transform-comparison',
    tags: ['Python', 'MATLAB', 'Signal Processing'],
  },
  {
    id: 'homomorphic-cancer-prediction',
    name: 'Secure Cancer Prediction System with Homomorphic Encryption',
    description:
      'Extended an open-source machine-learning framework to support privacy-preserving cancer prediction, implementing and comparing the BFV and CKKS homomorphic encryption schemes with Microsoft SEAL in C#. I evaluated accuracy and runtime trade-offs on encrypted genomic data (~5,600 features across 22 cancer types), comparing exact versus approximate encrypted inference.',
    image: '/projects/placeholder-4.svg',
    githubUrl: 'https://github.com/paka249/CS_4371_project',
    tags: ['C#', 'Cryptography', 'Machine Learning'],
  },
]
