export type ExtracurricularActivity = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  photos: string[];
};

export const extracurricularActivity: ExtracurricularActivity = {
  title: "JAPIT - UET Japanese Club",
  period: "Dec 2021 - June 2025",
  description: "Active participation in cultural events and club activities.",
  highlights: [
    "Participate in the club day event organization, provide logistical support, and choreograph performances.",
    "Organize events, introduce multiple Japanese cultures.",
  ],
  photos: [
    "/imgs/activity1.jpg",
    "/imgs/activity2.jpg",
    "/imgs/activity3.jpg",
    "/imgs/activity4.jpg",
    "/imgs/activity5.jpg",
    "/imgs/activity6.jpg",
    "/imgs/activity7.jpg",
    "/imgs/activity8.jpg",
  ],
};