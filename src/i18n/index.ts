import english from "@/i18n/en.json";  

export function getI18N({ currentLocale = "en" }) {

  if (currentLocale === "en") return english;


  return english;  
}