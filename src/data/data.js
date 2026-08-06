import { GraduationCap, HandHeart, UsersRound, HeartHandshake, Shirt, School } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Introduction', href: '#introduction' },
  { label: 'Programs', href: '#programs' },
  { label: 'Funds', href: '#funds' },
  { label: 'Team', href: '#team' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' }
]

export const team = [
  { image: '/team/aftab-umar.jpeg', name: 'Sardar Aftab Umar', role: 'President' },
  { image: '/team/zafar-iqbal.jpeg', name: 'Mr. Zafar Iqbal', role: 'Vice President' },
  { image: '/team/amjad-zareen.jpeg', name: 'Mr. Amjad Zareen', role: 'General Secretary' },
  { image: '/team/sardar-arshad.jpeg', name: 'Sardar Muhammad Arshad', role: 'Deputy General Secretary' },
  { image: '/team/imran-nabi.jpeg', name: 'Mr. Sardar Imran Nabi', role: 'Finance Secretary' },
  { image: '/team/muhammad-arshad.jpeg', name: 'Muhammad Arshad', role: 'Deputy Finance Secretary' },
  { image: '/team/farhan-gohar.jpeg', name: 'Mr. Hafiz Farhan Gohar', role: 'Information Secretary' },
  { image: '/team/shehzad-rabbani.jpeg', name: 'Mr. Shehzad Rabbani', role: 'Joint Secretary' },
  { image: '/team/sajjad-ahmad.jpeg', name: 'Mr. Sajjad Ahmad', role: 'Office Secretary' },
  { image: '/team/saad-ilyas.jpeg', name: 'Mr. Saad Ilyas', role: 'Honorary Member' },
  { image: '/team/izzaz-safeer.jpeg', name: 'Mr. Sardar Izzaz Safeer', role: 'Honorary Member' }
]

export const fundDetails = [
  { month: 'September', amount: 'Rs. 69,360' },
  { month: 'October', amount: 'Rs. 159,440' },
  { month: 'November', amount: 'Rs. 154,050' }
]

export const expenditureDetails = [
  { title: 'September Sponsorship Program', amount: 'Rs. 60,000' },
  { title: 'October Sponsorship Program', amount: 'Rs. 78,000' },
  { title: 'Sweaters Project', amount: 'Rs. 57,850' },
  { title: 'November Sponsorship Program', amount: 'Rs. 78,000' }
]

export const galleryItems = [
  { image: '/gallery/project-1.jpeg', title: 'Community Welfare', category: 'Welfare' },
  { image: '/gallery/project-2.jpeg', title: 'Education Support', category: 'Education' },
  { image: '/gallery/project-3.jpeg', title: 'Students Support', category: 'Students' },
  { image: '/gallery/project-4.jpeg', title: 'Community Activities', category: 'Community' },
  { image: '/gallery/project-5.jpeg', title: 'Collective Effort', category: 'Society' },
  { image: '/gallery/project-6.jpeg', title: 'Serving Together', category: 'Welfare' }
]

export const timeline = [
  {
    date: '27 August 2022',
    title: 'The Beginning',
    text: 'Maira Kalan Welfare Society (Namli Maira) was established through the WhatsApp group VC2 Namli Maira Unity. During discussions in the group, members raised various community issues and tried to find solutions.'
  },
  {
    date: '3 September 2022',
    title: 'Consultative Committee',
    text: 'A consultative committee was formed, and meetings began to determine the organisation’s aims, objectives, and regulations.'
  },
  {
    date: '6 September 2022',
    title: 'The Society Takes Shape',
    text: 'The first meeting was held. Several names for the organisation were suggested, and through voting, the name Maira Kalan Welfare Society was selected.'
  },
  {
    date: 'September 2022',
    title: 'Foundation Finalized',
    text: 'During the same month, the society’s constitution and basic framework were finalized, establishing the foundation for its welfare activities.'
  }
]

export const programs = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Education Support',
    description: 'Supporting deserving students and helping provide educational resources that can make a practical difference in their lives.'
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Sponsorship Program',
    description: 'Providing financial assistance to deserving members of the community through the society’s sponsorship initiatives.'
  },
  {
    number: '03',
    icon: UsersRound,
    title: 'Community Welfare',
    description: 'Working collectively to identify community needs and provide practical assistance where it is needed most.'
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Humanitarian Assistance',
    description: 'Extending support to deserving individuals and families with compassion, dignity, and a spirit of collective service.'
  }
]

export const projects = [
  {
    icon: HandHeart,
    category: 'Sponsorship',
    title: 'Student Sponsorship',
    description: 'Financial assistance was provided to deserving students through the society’s sponsorship program.'
  },
  {
    icon: Shirt,
    category: 'Education Support',
    title: 'Warm Sweaters',
    description: 'Warm sweaters were distributed to deserving students of government schools to support them during the colder months.'
  },
  {
    icon: GraduationCap,
    category: 'Education Support',
    title: 'New Shoes',
    description: 'New shoes were provided to deserving students as part of the society’s support for school-going children.'
  },
  {
    icon: School,
    category: 'School Support',
    title: 'School Uniforms',
    description: 'Uniforms were provided to students of government schools for the following academic year.'
  }
]