import { GraduationCap, HandHeart, UsersRound, HeartHandshake, Shirt, School } from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Introduction', href: '#introduction' },
  { label: 'Programs', href: '#programs' },
  { label: 'Funds', href: '#funds' },
  { label: 'Team', href: '#team' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
]

export const team = [
  { image: `${import.meta.env.BASE_URL}team/aftab-umar.jpeg`, name: 'Sardar Aftab Umar', role: 'President' },
  { image: `${import.meta.env.BASE_URL}team/zafar-iqbal.jpeg`, name: 'Mr. Zafar Iqbal', role: 'Vice President' },
  { image: `${import.meta.env.BASE_URL}team/amjad-zareen.jpeg`, name: 'Mr. Amjad Zareen', role: 'General Secretary' },
  { image: `${import.meta.env.BASE_URL}team/sardar-arshad.jpeg`, name: 'Sardar Muhammad Arshad', role: 'Deputy General Secretary' },
  { image: `${import.meta.env.BASE_URL}team/imran-nabi.jpeg`, name: 'Mr. Sardar Imran Nabi', role: 'Finance Secretary' },
  { image: `${import.meta.env.BASE_URL}team/muhammad-arshad.jpeg`, name: 'Muhammad Arshad', role: 'Deputy Finance Secretary' },
  { image: `${import.meta.env.BASE_URL}team/farhan-gohar.jpeg`, name: 'Mr. Hafiz Farhan Gohar', role: 'Information Secretary' },
  { image: `${import.meta.env.BASE_URL}team/shehzad-rabbani.jpeg`, name: 'Mr. Shehzad Rabbani', role: 'Joint Secretary' },
  { image: `${import.meta.env.BASE_URL}team/sajjad-ahmad.jpeg`, name: 'Mr. Sajjad Ahmad', role: 'Office Secretary' },
  { image: `${import.meta.env.BASE_URL}team/saad-ilyas.jpeg`, name: 'Mr. Saad Ilyas', role: 'Honorary Member' },
  { image: `${import.meta.env.BASE_URL}team/izzaz-safeer.jpeg`, name: 'Mr. Sardar Izzaz Safeer', role: 'Honorary Member' }
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
  {
    image: `${import.meta.env.BASE_URL}gallery/health-support.jpeg`,
    title: 'Mobile Health Support',
    category: 'Health',
    alt: 'Mobile health support activity in the community'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/education-supplies.jpeg`,
    title: 'Educational Supplies',
    category: 'Education',
    alt: 'Educational supplies prepared for students'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/student-support-01.jpeg`,
    title: 'Supporting Students',
    category: 'Education',
    alt: 'Students gathered during an education support activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/student-support-02.jpeg`,
    title: 'Education Support',
    category: 'Education',
    alt: 'Students receiving educational support'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/student-recognition-01.jpeg`,
    title: 'Recognizing Students',
    category: 'Education',
    alt: 'Students and community members during a recognition activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/student-recognition-02.jpeg`,
    title: 'Student Recognition',
    category: 'Education',
    alt: 'Student receiving recognition during a community activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/community-gathering.jpeg`,
    title: 'Community Gathering',
    category: 'Community',
    alt: 'Community members gathered together during a society activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/school-bags-01.jpeg`,
    title: 'School Bag Support',
    category: 'Education',
    alt: 'Students with school bags provided through an education support activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/school-bags-02.jpeg`,
    title: 'Supporting Schoolchildren',
    category: 'Education',
    alt: 'Schoolchildren with educational support items'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/community-activity.jpeg`,
    title: 'Community Activity',
    category: 'Community',
    alt: 'Community members participating in a welfare activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/society-recognition.jpeg`,
    title: 'Community Recognition',
    category: 'Recognition',
    alt: 'Society members presenting recognition during a community activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/community-meeting.jpeg`,
    title: 'Community Meeting',
    category: 'Community',
    alt: 'Community members gathered for a society meeting'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/student-support-03.jpeg`,
    title: 'Student Support',
    category: 'Education',
    alt: 'Students receiving support through a welfare activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/community-gathering-02.jpeg`,
    title: 'Together as a Community',
    category: 'Community',
    alt: 'Community members gathered together during a society activity'
  },
  {
    image: `${import.meta.env.BASE_URL}gallery/education-activity.jpeg`,
    title: 'Education in Action',
    category: 'Education',
    alt: 'Students participating in an education support activity'
  }
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