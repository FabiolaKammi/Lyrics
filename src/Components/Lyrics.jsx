import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Lyrics = () => {

    const musicInfo = [
        {
            title:"See You Again",
            infos:"liberty",
            clip:"https://www.youtube.com/embed/qWCtBxG85s4?si=gQP9xZ9jXteEzEOw"
        },

        {
            title:"Easy On Me",
            infos:"Adele",
            clip:"https://www.youtube.com/embed/Xx_lzjKsEdI?si=gntC_ktLN7xjoX1R"
        },
        {
          title:"PASSENGER",
          infos:"tech",
          clip:"https://www.youtube.com/embed/lRVTVB94zTg?si=bzEhbKx0adm4EZEX"
      },
      {
        title:"ARTECHOUSE",
        infos:"tech",
        clip:"https://www.youtube.com/embed/ZVlQOytFCRI?si=07LVYA3hc-TjMFJb"
    },
    {
      title:"A Thousands Years",
      infos:"Christiana Perri",
      clip:"https://www.youtube.com/embed/mk3XycambgI?si=_r0iZO-h-oXtonGi"
  },
  {
    title:"We don't talk anymore",
    infos:"Charlie puth",
    clip:"https://www.youtube.com/embed/A3TKxux17ZA?si=26mKg6I7wLCf1PHI"
},
{
  title:"Photograph",
  infos:"Ed Sheeran",
  clip:"https://www.youtube.com/embed/HpphFd_mzXE?si=BoszzPCN9XgeAysK"
},
{
  title:"Perfect",
  infos:"Ed Sheeran",
  clip:"https://www.youtube.com/embed/kPhpHvnnn0Q?si=I-JIN1j4Qc0EzfKe"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/ZVlQOytFCRI?si=07LVYA3hc-TjMFJb"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/yNk1UgFeX0o?si=55mJIuBnlvBDYlXo"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/ZVlQOytFCRI?si=07LVYA3hc-TjMFJb"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/yNk1UgFeX0o?si=55mJIuBnlvBDYlXo"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/yNk1UgFeX0o?si=55mJIuBnlvBDYlXo"
},

{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/yNk1UgFeX0o?si=55mJIuBnlvBDYlXo"
},
{
  title:"ARTECHOUSE",
  infos:"tech",
  clip:"https://www.youtube.com/embed/ZVlQOytFCRI?si=07LVYA3hc-TjMFJb"
},
{
  title:"Legends Never Die",
  infos:"Rare Vibes",
  clip:"https://www.youtube.com/embed/1fOBgosDo7s?si=twIP8QiMaBuOckiH"
}
      
    ]
  return (
    <div className='container'>
         {
                musicInfo.map((item, id)=>{
                  return(
                    <div key={id} className='lyric-container' >
                <span>{item.title}</span>
                <p>{item.infos}</p>
                <Container>
      <div className="ratio-ratio-21x21">
             <iframe width="200" height="315"  src={item.clip} title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
            </div>
                 ) })
            }
      
    </div>
  )
}

export default Lyrics;

<iframe width="560" height="315"
 src="https://www.youtube.com/embed/yNk1UgFeX0o?si=55mJIuBnlvBDYlXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>