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

export const generalBody = [
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-mubasher-yousaf.jpeg`,
    name: 'Mr. Mubasher Yousaf'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-haji-malik-riaz.jpeg`,
    name: 'Mr. Haji Malik Riaz',
    position: 'center 35%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-khan-ayaz-khan.jpeg`,
    name: 'Mr. Khan Ayaz Khan',
    position: 'center 20%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-sardar-azher-nabi.jpeg`,
    name: 'Mr. Sardar Azher Nabi'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-talat-amin.jpeg`,
    name: 'Mr. Talat Amin',
    position: 'center 25%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-umer-pervez-karlal.jpeg`,
    name: 'Mr. Umer Pervez Karlal'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-ehsan-ramzan.jpeg`,
    name: 'Mr. Ehsan Ramzan'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-gulzeb-bobi.jpeg`,
    name: 'Mr. Gulzeb Bobi'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-ilyas-sardar.jpeg`,
    name: 'Mr. Ilyas Sardar',
    position: 'center 25%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-abid-hussain.jpeg`,
    name: 'Mr. Abid Hussain'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-sardar-mubasher-azeem.jpeg`,
    name: 'Mr. Sardar Mubasher Azeem'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-tehseen-irahad.jpeg`,
    name: 'Mr. Tehseen Irahad',
    position: 'center 15%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-rashid-gulistan.jpeg`,
    name: 'Mr. Rashid Gulistan'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-sardar-binyamin.jpeg`,
    name: 'Mr. Sardar Binyamin',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-sardar-iftikhar-karlal.jpeg`,
    name: 'Mr. Sardar Iftikhar Karlal'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-muzafar-fareed.jpeg`,
    name: 'Mr. Muzafar Fareed',
    position: 'center 20%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-jamshed-zeb.jpeg`,
    name: 'Mr. Jamshed Zeb',
    position: 'center 60%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-tariq-gulistan.jpeg`,
    name: 'Mr. Tariq Gulistan',
    position: 'center 25%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-ibrar-abbasi.jpeg`,
    name: 'Mr. Ibrar Abbasi',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-sardar-alam-zeb.jpeg`,
    name: 'Mr. Sardar Alam Zeb'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-shoaib-hamdani.jpeg`,
    name: 'Mr. Shoaib Hamdani',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-m-haroon-qasim-shah.jpeg`,
    name: 'Mr. M.Haroon (Qasim Shah)',
    position: 'center 25%'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-tanveer-ahmad.jpeg`,
    name: 'Mr. Tanveer Ahmad'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-dr-naeem.jpeg`,
    name: 'Mr. Dr.Naeem'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-yasir-rehan.jpeg`,
    name: 'Mr. Yasir Rehan'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-mumtaz-hussain.jpeg`,
    name: 'Mr. Mumtaz Hussain'
  },
  {
    image: `${import.meta.env.BASE_URL}general-body/mr-haji-raees-jamal.jpeg`,
    name: 'Mr. Haji Raees Jamal'
  }
]

export const founderMembers = [
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-mubasher-yousaf.jpeg`,
    name: 'Mr. Mubasher Yousaf',
    role: 'Founder Member'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-tahir-farooq.jpeg`,
    name: 'Mr. Tahir Farooq',
    role: 'Founder Member'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-azher-nabi-hazarvi.jpeg`,
    name: 'Mr. Azher Nabi Hazarvi',
    role: 'Founder Member'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-haji-khalid-rabbani.jpeg`,
    name: 'Mr. Haji Khalid Rabbani',
    role: 'Founder Member'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-m-haroon-qasim-shah.jpeg`,
    name: 'Mr. M.Haroon [Qasim Shah]',
    role: 'Founder Member',
    position: 'center 10%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-jamshed-zeb.jpeg`,
    name: 'Mr. Jamshed Zeb',
    role: 'Founder Member'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-malik-sajid-zeb.jpeg`,
    name: 'Mr. Malik Sajid Zeb',
    role: 'Founder Member',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-naveed-pervez.jpeg`,
    name: 'Mr. Naveed Pervez',
    role: 'Founder Member',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-zafar-iqbal.jpeg`,
    name: 'Mr. Zafar Iqbal',
    role: 'Founder Member',
    position: 'center 35%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-aftab-younas.jpeg`,
    name: 'Mr. Aftab Younas',
    role: 'Founder Member',
    position: 'center 14%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-arshad-nazeer.jpeg`,
    name: 'Mr. Arshad Nazeer',
    role: 'Founder Member',
    position: 'center 45%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-ibrar-abbasi.jpeg`,
    name: 'Mr. Ibrar Abbasi',
    role: 'Founder Member',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-binyamin-asi.jpeg`,
    name: 'Mr. Binyamin ASI',
    role: 'Founder Member',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-m-sajid-mughal.jpeg`,
    name: 'Mr. M.Sajid Mughal',
    role: 'Founder Member',
    position: 'center 23%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-muzafar-fareed.jpeg`,
    name: 'Mr. Muzafar Fareed',
    role: 'Founder Member',
    position: 'center 20%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-amjad-zareen.jpeg`,
    name: 'Mr. Amjad Zareen',
    role: 'Founder Member',
    position: 'center 80%'
  },
  {
    image: `${import.meta.env.BASE_URL}founder-members/mr-arshad-nazeer-sir.jpeg`,
    name: 'Mr. Arshad Nazeer (Sir)',
    role: 'Founder Member',
    position: 'center 22%'
  }
]

export const formerMembers = [
  {
    image: `${import.meta.env.BASE_URL}former-members/sardar-zahoor-ahmad.jpeg`,
    name: 'Sardar Zahoor Ahmad',
    role: 'Ex. SC Member'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/aqib-nayab.jpeg`,
    name: 'Aqib Nayab',
    role: 'Ex. SC Member',
    position: 'center 30%'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/m-ashfaq.jpeg`,
    name: 'M.Ashfaq',
    role: 'Ex. SC Member',
    position: 'center 18%'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/ejaz-ur-rehman.jpeg`,
    name: 'Ejaz-Ur-Rehman',
    role: 'Ex. SC Member',
    position: 'center 15%'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/waleed-waheed.jpeg`,
    name: 'Waleed Waheed',
    role: 'Ex. SC Member'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/fahad-zulfiqar.jpeg`,
    name: 'Fahad Zulfiqar',
    role: 'Ex. SC Member'
  },
  {
    image: `${import.meta.env.BASE_URL}former-members/imran-nabi.jpeg`,
    name: 'Imran Nabi',
    role: 'Ex. SC Member',
    position: 'center 28%'
  }
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