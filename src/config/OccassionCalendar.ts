
export type Occasion = {
    id: string;
    month: number; // 1–12
    day: number;
    message: string;
    priority: number;
    theme: "tricolor" | "brand";
  };
  
  export const occasionCalendar: Occasion[] = [
    { id: "new-year", month: 1, day: 1, message: "HAPPY NEW YEAR", priority: 5, theme: "brand" },
    { id: "national-youth-day", month: 1, day: 12, message: "CELEBRATING YOUNG INDIA", priority: 5, theme: "brand" },
    { id: "republic-day", month: 1, day: 26, message: "HAPPY REPUBLIC DAY", priority: 10, theme: "tricolor" },
    { id: "womens-day", month: 3, day: 8, message: "CELEBRATING WOMEN", priority: 5, theme: "brand" },
    { id: "ambedkar-jayanti", month: 4, day: 14, message: "HONOURING DR. AMBEDKAR", priority: 6, theme: "brand" },
    { id: "maharashtra-day", month: 5, day: 1, message: "HAPPY MAHARASHTRA DAY", priority: 6, theme: "brand" },
    { id: "environment-day", month: 6, day: 5, message: "PROTECT OUR PLANET", priority: 5, theme: "brand" },
    { id: "independence-day", month: 8, day: 15, message: "HAPPY INDEPENDENCE DAY", priority: 10, theme: "tricolor" },
    { id: "teachers-day", month: 9, day: 5, message: "CELEBRATING OUR TEACHERS", priority: 5, theme: "brand" },
    { id: "gandhi-jayanti", month: 10, day: 2, message: "REMEMBERING GANDHI", priority: 6, theme: "brand" },
    { id: "unity-day", month: 10, day: 31, message: "UNITY IN DIVERSITY", priority: 6, theme: "brand" },
    { id: "childrens-day", month: 11, day: 14, message: "CELEBRATING CHILDHOOD", priority: 5, theme: "brand" },
    { id: "constitution-day", month: 11, day: 26, message: "HONOURING OUR CONSTITUTION", priority: 6, theme: "brand" },
    { id: "christmas", month: 12, day: 25, message: "SEASON'S GREETINGS", priority: 5, theme: "brand" },
    {
        id: "dussehra-launch-2026",
        month: 10,
        day: 19,
        message: "WE'RE LIVE TODAY!",
        priority: 20,
        theme: "brand",
       
      }
  ];
  