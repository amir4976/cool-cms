let WeeklySell = [
    {title:'بالا نویسندگان',personName:'جوادوجمشیدی',sell:82,icon:'./logos/bebo.svg'},
    {title:'محبوب نویسندگان',personName:'حسینی و رضایی',sell:280,icon:'../logos/plurk.svg'},
    {title:'جدید کاربران',personName:'محمدی و سعیدی',sell:4500,icon:'../logos/telegram.svg'},
    {title:'فعال مشتریان',personName:'جواد و جمشیدی',sell:686,icon:'../logos/vimeo.svg'},
];

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  let Todos = [
    {todosName:'ساختن لوگو فروشگاه',timeOut:2,isNew:true , color:'#3BB077'},
    {todosName:'جلسه ذینفعان',timeOut:2,isNew:true , color:'#d95087'},
    {todosName:'ارزوربی و ارزوربی',timeOut:2,isNew:true , color:'#2a7ade'},
    {todosName:'ویترین برنامه',timeOut:2,isNew:true , color:'#3BB077'},
    {todosName:'ملاقات پروژه ها',timeOut:2,isNew:true , color:'#d95087'},
    {todosName:'مشتریان بروزرسانی',timeOut:2,isNew:true , color:'#2a7ade'},
  ]

  let lastActions = [
    {dis:'رئوس مطالب شما را صادق نگه می دارد. و ساختار را حفظ کنید',time:'08:42',color:'#D0A409' , isImport:true},
    {dis:' زمان ملاقات',time:'08:42',color:'#4FC987' , isImport:false},
    {dis:'سپرده گذاری کنید USD 700. to ESL',time:'08:42',color:'#EB406A' , isImport:true},
    {dis:'لذت بردن از رانندگی ضعیف و حفظ ساختار عالی است',time:'08:42',color:'#087DC3' , isImport:false},
    {dis:'سفارش جدید placed #XF-2356.',time:'08:42',color:'#D0A409' , isImport:true},
    {dis:' لذت بردن از رانندگی ضعیف و حفظ ساختار عالی است',time:'08:42',color:'#eb406a' , isImport:false},
    {dis:'سفارش جدید placed #XF-2356.',time:'08:42',color:'#4fc987' , isImport:true},
    {dis:'جلسه آماده سازی راه اندازی اپلیکیشن موبایل دارایی، مالیه، سرمایه گذاری',time:'08:42',color:'#4fc987' , isImport:false},
  ]
  let LastNewNotif = [
    {title:'جشن ناهار گروهی',progress:'28%', timeOut:'2',Status:'declined'},
    {title:'بهینه سازی پیمایش',progress:'50%', timeOut:'2',Status:'approved'},
    {title:'پلان و استراتژی',progress:'11%', timeOut:'2',Status:'pending' },
    {title:'استراتژی اهداف محصول',progress:'88%', timeOut:'2',Status:'declined'},
  ]


let files = [
  {title:'بخش وکتور ها',view:4000, size:'5.8mb',cover:'./files/ai.svg'},
  {title:'بخش فایل های css',view:4000, size:'10mb',cover:'./files/css.svg'},
  {title:'داکیومنت ها',view:4000, size:'10mb',cover:'./files/doc.svg'},
  {title:'پی دی اف ها',view:4000, size:'10mb',cover:'./files/pdf.svg'},
  {title:'عکس های tıf',view:4000, size:'10mb',cover:'./files/tif.svg'},
]
let person = [
  {title:'برد سیموتنز', peyment:'30,000$',cover:'./avatars/001-boy.svg'},
  {title:'علی رضایی', peyment:'30,000$',cover:'./avatars/043-boy-18.svg'},
  {title:'محمد علی', peyment:'30,000$',cover:'./avatars/043-boy-18.svg'},
  {title:'نازی علی دوست', peyment:'30,000$',cover:'./avatars/047-girl-25.svg'},
  {title:'اتنا رضایی', peyment:'30,000$',cover:'./avatars/014-girl-7.svg'},
]

let dateReport = [
  {date:20 ,isActive:true, day:'fr',reports:[
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
  ]}, 
   {date:21 ,isActive:false, day:'sa',reports:[
     {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
     {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
  ]}, 
   {date:22,isActive:false, day:'su',reports:[
     {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
     {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
  ]}, 
   {date:23 ,isActive:false, day:'mo',reports:[
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
  ]},  
  {date:24 ,isActive:false, day:'tu',reports:[
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
  ]},
    {date:25 ,isActive:false, day:'we',reports:[
      {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
      {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
      {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
  ]}, 
   {date:26 ,isActive:false, day:'th',reports:[
     {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
     {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
     {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
  ]}, 
   {date:27 ,isActive:false, day:'fr',reports:[
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
  ]}, 
   {date:28 ,isActive:false, day:'sa',reports:[
     {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
  ]}, 
   {date:29 ,isActive:false, day:'su',reports:[
     {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
     {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
     {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
  ]},
  {date:30 ,isActive:false, day:'mo',reports:[
    {time:'16:30 - 17:00',dayTime:'am',name:'کمیسیون بازاریابی',by:'پیتر جانسون',color:'yellow'},
    {time:'12:00 - 13:40 ',dayTime:'am',name:'طراحی داشبورد',by:'باب',color:'blue'},
    {time:'10:20 - 11:00',dayTime:'am',name:'پروژه های انجام شده',by:'پیتر جانسون',color:'green'},
  ]},

] 

let profile = {name:'darcy' , job:'designer' , profile:'./profs/300-14.jpg' , email:'...@email.com'}
let followers = [
  {name:'محمد ابراهیمی',profile:'./profs/ben-sweet-2LowviVHZ-E-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/ashton-bingham-EQFtEzJGERg-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'نازی علی زاده',profile:'./profs/aiony-haust-3TLl_97HNJo-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/300-25.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'مریم رضایی',profile:'./profs/300-23.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'زهرا محمد زاده',profile:'./profs/stefan-stefancik-QXevDflbl8A-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/omid-armin-b5yGzWOpkMo-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/julian-wan-WNoLnJo7tS8-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'علاهه',profile:'./profs/jake-nackos-IF9TK5Uy-KI-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'الکس',profile:'./profs/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/300-21.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'مریم',profile:'./profs/300-20.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'darcy',profile:'./profs/300-14.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'حسینی',profile:'./profs/300-13.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمدزاده',profile:'./profs/300-12.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/300-9.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'عاطفه',profile:'./profs/300-6.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'خانم رضایی',profile:'./profs/300-4.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'مهدثه',profile:'./profs/300-2.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
  {name:'محمد ابراهیمی',profile:'./profs/300-1.jpg',job:'توسعه دهنده',income:146000,sell:236400,isFollowed:false,isOnline:'false'},
]

let projectList = [
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'pending', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'pending', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'pending', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'deslined', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'deslined', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'deslined', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'done', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'done', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'70%'},
  {name:'سیستم مالی', programFor:'بهره وری منابع انسانی', status:'done', income:'84,000,000',date:'اردیبهشت 5 2022' ,camponyIcon:'	https://metronictheme.job100.ir/rtl/metronic8/demo14/dist/assets/media/svg/brand-logos/aven.svg',progress:'50%'},
]

let campaigns = [
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/twitch.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/twitter.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/spotify.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/pinterest-p.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/github.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/youtube-play.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/telegram (1).svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/reddit.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
  {campaignsName:'دنبال کننده تویئتر',icon:'./svgs/vimeo.svg',performance:'$8000000',weeklyCheck:'17.62%' , rise:false,dis:'رشد دنبال کردن' , footerInfo:'5%' ,footerDIS:'جدید'},
]
const dataChart = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export {WeeklySell,data,Todos,lastActions,LastNewNotif,files,person , dateReport,profile,followers,projectList,campaigns,dataChart}

