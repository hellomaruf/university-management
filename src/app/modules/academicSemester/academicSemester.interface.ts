export type IMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type IAcademicSemesterName = "Autumn" | "Summar" | "Fall";
export type IAcademicSemesterCode = "01" | "02" | "03";

export interface IAcademicSemester {
  name: IAcademicSemesterName;
  code: IAcademicSemesterCode;
  year: Date;
  startMonth: IMonth;
  endMonth: IMonth;
}

export type IUpdateSemester = Partial<IAcademicSemester>;
