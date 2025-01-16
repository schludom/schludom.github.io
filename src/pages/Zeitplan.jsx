import Navbar from "../components/navbar/Navbar"
import "./Zeitplan.css"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Restaurant from '@mui/icons-material/Restaurant';
import WavingHand from '@mui/icons-material/WavingHand';
import Typography from '@mui/material/Typography';

const Item = ({time, text, icon, orientation}) => {

    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0', fontSize: '12pt', fontFamily:"Didot, serif", color: "rgb(129, 129, 129)"}}>
                    {time}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{height:20}}/>
                    <TimelineDot variant="outlined" sx={{color:"black", borderColor:"purple"}}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector sx={{height:20}} />
                </TimelineSeparator>
                <TimelineContent sx={{ px: 2, display: "flex", alignItems: "center", justifyContent: orientation === "end" ? "end" : "start"  }}>
                    <Typography component="span" sx={{ fontSize: '12pt', fontFamily:"Didot, serif", color: "rgb(129, 129, 129)" }}>
                        {text}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </>

    )

}


const Zeitplan = () => {

  return (
    <>
      <Navbar />
      <div className="zeitplan-container">
      <Timeline position="alternate">
        <Item text="Eintreffen & Begrüßung" time="10:30 am" icon={<WavingHand/>} />
        <Item text="Standesamt & Trauung" time="10:30 am" icon={<FastfoodIcon/>} orientation="end"/>
        <Item text="Sektempfang" time="10:30 am" icon={<FastfoodIcon/>} />
        <Item text="Gruppenfotos" time="10:30 am" icon={<FastfoodIcon/> } orientation="end" />
        <Item text="Abendessen" time="10:30 am" icon={<Restaurant/>} />
        <Item text="Hochzeitstorte" time="10:30 am" icon={<FastfoodIcon/>} orientation="end"/>
        <Item text="Eröffnungstanz" time="10:30 am" icon={<FastfoodIcon/>} />
        <Item text="Party" time="10:30 am" icon={<FastfoodIcon/>} orientation="end"/>
    </Timeline>
      </div>
    </>
  )
}

export default Zeitplan