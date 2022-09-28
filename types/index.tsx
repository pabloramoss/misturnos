// ScheduleRange = {start: "9:00", end: "12:00"}
export interface ScheduleRange {
  start: DayHour;
  end: DayHour;
}

export type Day = LaborDay | DayOff;

// LaborDay = [{start: "9:00", end: "12:00"}, {start: "16:00", end: "20:00"}]
export type LaborDay = ScheduleRange[];

export type DayOff = null;

export type Week = {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
};

// DayHour = "9:00" | "10:00" ...
export type DayHour = string;

// AppointmentInterval =  "15 min" | "30 min" | "1 hora" | "1h 30min" | "2 horas"
export type AppointmentInterval = 0.25 | 0.5 | 1 | 1.5 | 2;

// Employee = {name: "John", week: {monday...}}
export interface Employee {
  name: string;
  week: Week;
}

// Stuff = [{name: "John", week: {monday...}},{name: "Doe", week: {monday...}}]
export type Stuff = Employee[];

export type Date = string;
