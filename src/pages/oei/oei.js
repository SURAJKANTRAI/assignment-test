import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {MdOutlineDesktopMac,MdKeyboardArrowDown,MdDownload,MdShare} from "react-icons/md"
import Button from 'react-bootstrap/Button';
import {IoCalendarOutline,IoReload} from "react-icons/io5"
import {ImMobile} from "react-icons/im"
import { useHistory } from "react-router-dom";
const OEI = () =>{
  const history = useHistory();
    const chartData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
      datasets: [{
        label: 'My First Dataset',
        data: [5,5,20,5,25,20,15,15,20,5,5,10,8,6,8,10,15,3],
        backgroundColor: [
          '#788f39',
          '#788f39',
          '#8fb888',
        ],
        hoverOffset: 10
      },
      {
        label: 'My First Dataset',
        data: [10,25,45,40,20,10,10,20,20],
        backgroundColor: [
          '#f5c61d',
          '#05b508',
          '#c21206',
          '#ded00d'
        ],
        hoverOffset: 10
      },
      {
        label: 'My First Dataset',
        data: [35,45,70,50],
      backgroundColor: [
        '#1296b0',
        '#5bc8de',
        '#5bc8de',
        '#32b7d1'
      ],
        hoverOffset: 10
      },
    ]
    };
    const plugins = [{
      beforeDraw: function(chart) {
       var width = chart.width,
           height = chart.height,
           ctx = chart.ctx;
           ctx.restore();
           var fontSize = 2;
           ctx.font = fontSize + "em sans-serif";
           ctx.textBaseline = "top";
           var text = "Tickets: 200",
           textX = Math.round((width - ctx.measureText(text).width) / 2),
           textY = height / 2;
           ctx.fillText(text, textX, textY);
           ctx.save();
      } 
    }]
    const insight = [
      {
        title:"Desktop",
        description:"Email servers need immmediate fortifaction most brach attempts are between 03.00 Hrs and 07:30 Hrs for the date range",
        btn:"Default",
        icon:<MdOutlineDesktopMac className='icons' />
      },
      {
        title:"Desktop",
        description:"Email servers need immmediate fortifaction most brach attempts are between 03.00 Hrs and 07:30 Hrs for the date range",
        btn:"Default",
        icon:<MdOutlineDesktopMac className='icons' />
      },
      {
        title:"Mobile",
        description:"Email servers need immmediate fortifaction most brach attempts are between 03.00 Hrs and 07:30 Hrs for the date range",
        btn:"Default",
        icon:<MdOutlineDesktopMac className='icons' />
      },
    ]
  return (
     <div className='wrapper'>
     <Container>
        <div className='title'>
        <h1>OEI</h1>
        </div>
        
        <Row>
          <Col  sm={8} md={8} lg={8}>
              <div className='actionbar'>
                <Button variant="outline-info" className='my-btn'>
                    <IoCalendarOutline />
                    Today
                    <MdKeyboardArrowDown />
                  </Button>
                  <div className='tabliating'>
                      <ul>
                        <li><a>SLA</a></li>
                        <li className='active'><a>TICKETS</a></li>
                        <li><a>INFRASTRUCTURE</a></li>
                      </ul>
                    </div>
                  <div className='iconsShared'>
                    <a><IoReload /></a>
                    <a><MdDownload /></a>
                    <a><MdShare /></a>
                  </div>
              </div>
          
              <div className='checkstatus'>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                    <label> category </label>
                  </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> priority </label>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> status </label>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> Respenend </label>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> First Response Time </label>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> Resolution </label>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox"/>
                  <label> False positive </label>
                </div>
              </div>
          </Col>
          <Col  sm={4} md={4} lg={4}>

          </Col>
        </Row>
       

        <Row>
          <Col  sm={8} md={8} lg={8}>
            <div className='chart_ui'>
            <Doughnut 
              data={chartData} 
              plugins={plugins}
              >
              </Doughnut>
            </div>
          </Col>
          <Col  sm={4} md={4} lg={4}>
            <div className="left_bar">
              <h3>INSIGHTS</h3>
              {
                insight.map((item, index) => {
                  return (
              <div className='list-insights'>
                  <div className='iconslist'>
                    {item.icon}
                  </div>
                  <div class="contant_lits">
                  <h5>   {item.title}</h5>
                    <p>{item.description}</p>
                    {
                      item.btn && (
                        <button onClick={() => history.push("/oei")}> view details</button>
                      )
                    }
                  </div>
              </div>
                  )
                })
              }
             
            </div>
          </Col>
        </Row>
        
      </Container>
     </div>
  );
}
export default OEI;