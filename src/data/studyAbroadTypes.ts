export interface University {
  name:string;
  city:string;
  qsRank2027?:number;
  levels:string[];
  popularAreas:string[];
  websiteUrl?:string;
  admissionsUrl?:string;
  admissionRequirements?:string;
}
export interface VisaStep { title:string; description:string }
export interface DestinationStudy { id:string; country:string; visaType:string; image:string; summary:string; intakes:string; officialVisaUrl:string; visaSteps:VisaStep[]; visaNotes:string; universities:University[] }
export interface ExamSection { name:string; duration:string; content:string; score:string }
export interface ExamInfo {
  id:string; name:string; fullName:string; officialUrl:string; format:string; requirements:string; note:string;
  duration:string; scoring:string; scoreScale:string; audience:string; sections:ExamSection[]; preparation:string[]; registrationUrl:string; resultsInfo:string; prepUrl?:string; eligibility?:string; testOptions?:string; scoreValidity?:string; feesNote?:string; officialResources?:{label:string;url:string}[];
}
