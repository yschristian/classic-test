export enum SelectedPage{
    Home="home",
    Test="test",
    RoadSigns="roadsigns",
    TrafficRules="trafficrules",
    ContactUs = "contactus"
}
export interface RoadType{
    id:number,
    title:string,
    description: string
}