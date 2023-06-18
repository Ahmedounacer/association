import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import quran1 from "../../quran1.jpeg"
import "./Activity.css"
function Activity() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className='activity'>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>2017</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            النشاط الثقافي والفني المنظم بمدرسة بوزعوض
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='imgs'> 
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
        </AccordionDetails>
      </Accordion>

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>2016</Typography>
          <Typography sx={{ width: '33%', flexShrink: 0 }}> 
                 "تنظيم النشاط الفني "هرما
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='imgs'> 
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>2018</Typography>
          <Typography sx={{ width: '40%', flexShrink: 0 }}>تنظيم الدورة الاولى لمسابقة
حفظ وتجويد القران الكريم
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='imgs'> 
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}>2019</Typography>
          <Typography sx={{ width: '40%', flexShrink: 0 }}> تنظيم الدورة الثانية لمسابقة
حفظ وتجويد القران الكريم

          </Typography>
        </AccordionSummary>
        <AccordionDetails className='imgs'> 
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: 'text.secondary' }}></Typography>
          <Typography sx={{ width: '34%', flexShrink: 0 }}> 
          اجتماعات الجمعية
          </Typography>
        </AccordionSummary>
        <AccordionDetails className='imgs'> 
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
          <img src={quran1}/>
        </AccordionDetails>
        </Accordion>
      </div>
  )
}

export default Activity