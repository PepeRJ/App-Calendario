import { Events } from "./events";

export interface Calendar  {
day: number;
currentDay: boolean;
currentMonth: boolean;
events: Events[];
date: Date;
}
