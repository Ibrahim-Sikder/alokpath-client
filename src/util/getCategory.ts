"use client";
export const getCategory = (basePath: string = "national"): string => {
  switch (basePath) {
    case "/national":
      return "জাতীয়";
    case "/politics":
      return "রাজনীতি";
    case "/international":
      return "আর্ন্তজাতিক";
    case "/economy":
      return "অর্থনীতি";
    case "/entertainment":
      return "বিনোদন";
    case "/technology":
      return "তথ্য ও প্রযুক্তি";
    case "/sports":
      return "খেলাধুলা";
    case "/education":
      return "শিক্ষা";
    case "/health":
      return "স্বাস্থ্য";
    case "/religion":
      return "ধর্ম ও ইসলাম";
    case "/tourism":
      return "ভ্রমণ ও পর্যটন";
    case "/art-culture":
      return "শিল্প ও সাহিত্য";
    case "/today":
      return "আজকের পত্রিকা";
    case "/campus":
      return "ক্যাম্পাস";
    case "/crime-law":
      return "অপরাধ ও আইন-শৃঙ্খলা";
    case "/lifestyle":
      return "লাইফ স্টাইল";
    case "/others":
      return "অন্যান্য";
    case "/sub-editorial":
      return "উপসম্পাদকীয়";
    case "/women":
      return "নারী";
    default:
      return "national";
  }
};
